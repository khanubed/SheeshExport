const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dir = 'D:\\CODING\\NavigoTech Innovation\\SheeshExports\\shees-exports-v1\\src\\app';

walkDir(dir, function(filePath) {
    if (filePath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find if it returns a <div> as root
        // Let's use a regex to see if `return (` is followed by `<div` (ignoring whitespace)
        // More robust: find the first <div or <main after return
        
        let match = content.match(/return\s*\(\s*(<div[^>]*>)/);
        if (match) {
            console.log("Replacing in: " + filePath);
            
            // Replace first `<div` in the return statement with `<main`
            let divTag = match[1];
            let newMainTag = divTag.replace('<div', '<main');
            
            content = content.replace(match[0], match[0].replace(divTag, newMainTag));
            
            // Find the last </div> before ); and replace with </main>
            // We'll reverse the string to find the last </div>
            let reversed = content.split('').reverse().join('');
            let idx = reversed.indexOf('>vid/<');
            if (idx !== -1) {
                let firstPart = reversed.substring(0, idx);
                let remainingPart = reversed.substring(idx + 6);
                let newReversed = firstPart + '>niam/<' + remainingPart;
                content = newReversed.split('').reverse().join('');
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
        }
    }
});
