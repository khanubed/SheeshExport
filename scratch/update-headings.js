const fs = require('fs');

function makeHeadingsBigAndBold(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Step 1: Change font-medium to font-bold in font-heading
  content = content.replace(/(className="[^"]*?font-heading[^"]*?)font-medium([^"]*?")/g, '$1font-bold tracking-tight$2');

  // Step 2: Increase text sizes
  content = content.replace(/text-3xl sm:text-4xl/g, 'text-4xl sm:text-5xl lg:text-6xl');
  content = content.replace(/text-4xl sm:text-5xl/g, 'text-5xl sm:text-6xl lg:text-7xl');
  content = content.replace(/font-heading text-2xl/g, 'font-heading text-3xl lg:text-4xl');
  content = content.replace(/font-heading text-xl/g, 'font-heading text-2xl lg:text-3xl');
  
  // Update Hero sizes if they were already text-5xl sm:text-6xl md:text-7xl -> text-6xl sm:text-7xl md:text-8xl
  content = content.replace(/text-5xl sm:text-6xl md:text-7xl/g, 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl');

  fs.writeFileSync(filePath, content);
}

makeHeadingsBigAndBold('./src/app/(website)/industries/page.tsx');
makeHeadingsBigAndBold('./src/app/(website)/industries/[slug]/page.tsx');

console.log("Headings updated!");
