const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SRC_DIR = path.join(__dirname, '../src');

const imageExts = ['.jpg', '.jpeg', '.png'];
const videoExts = ['.mp4', '.mov'];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
}

const allPublicFiles = getAllFiles(PUBLIC_DIR);
const conversions = [];

console.log('================================================');
console.log('🚀 Starting FFMPEG Asset Optimization...');
console.log('================================================\n');

for (const file of allPublicFiles) {
  const ext = path.extname(file).toLowerCase();
  let newExt = null;
  if (imageExts.includes(ext)) newExt = '.webp';
  else if (videoExts.includes(ext)) newExt = '.webm';

  if (newExt) {
    const newFile = file.slice(0, -ext.length) + newExt;
    
    // Avoid double converting things that were already webp somehow
    if (!file.endsWith('.webp') && !file.endsWith('.webm')) {
      if (!fs.existsSync(newFile)) {
        console.log(`⏳ Converting: ${path.basename(file)} -> ${path.basename(newFile)}`);
        try {
          if (newExt === '.webp') {
            execSync(`ffmpeg -v warning -y -i "${file}" -c:v libwebp -q:v 80 "${newFile}"`, { stdio: 'inherit' });
          } else {
            // Using VP9 with multithreading and realtime deadline for faster execution
            execSync(`ffmpeg -v warning -y -i "${file}" -c:v libvpx-vp9 -crf 30 -b:v 0 -row-mt 1 -cpu-used 4 -deadline realtime -c:a libopus "${newFile}"`, { stdio: 'inherit' });
          }
          conversions.push({ old: file, new: newFile, oldExt: ext, newExt });
          console.log(`✅ Success`);
        } catch (e) {
          console.error(`❌ Failed to convert ${file}`);
        }
      } else {
        console.log(`⏭️  Skipped: ${path.basename(newFile)} already exists.`);
        conversions.push({ old: file, new: newFile, oldExt: ext, newExt });
      }
    }
  }
}

console.log('\n================================================');
console.log('🔄 Replacing source code references...');
console.log('================================================\n');

const allSrcFiles = getAllFiles(SRC_DIR).filter(f => f.match(/\.(ts|tsx|js|jsx|json|md)$/));

let filesModifiedCount = 0;

for (const srcFile of allSrcFiles) {
  let content = fs.readFileSync(srcFile, 'utf8');
  let changed = false;
  
  for (const { old, oldExt, newExt } of conversions) {
    const baseNameOld = path.basename(old);
    const baseNameNew = path.basename(old).slice(0, -oldExt.length) + newExt;
    
    // Global replace for the exact filename
    const regex = new RegExp(baseNameOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, baseNameNew);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(srcFile, content, 'utf8');
    console.log(`📝 Updated references in: ${path.relative(__dirname, srcFile)}`);
    filesModifiedCount++;
  }
}

console.log('\n================================================');
console.log('🗑️  Cleaning up original assets...');
console.log('================================================\n');

let deletedCount = 0;
for (const { old } of conversions) {
  if (fs.existsSync(old)) {
    fs.unlinkSync(old);
    deletedCount++;
  }
}
console.log(`Deleted ${deletedCount} original files.`);

console.log(`\n🎉 All done! Optimized ${conversions.length} assets and updated ${filesModifiedCount} files.`);
