const fs = require('fs');

const path = './src/app/(website)/industries/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of max-w-4xl, max-w-3xl, max-w-[1200px], etc. within container divs with max-w-8xl
content = content.replace(/max-w-(?:4xl|5xl|3xl|\[\d+px\])/g, 'max-w-8xl');

fs.writeFileSync(path, content);
console.log('Replaced all max-w classes to max-w-8xl in industries hub');
