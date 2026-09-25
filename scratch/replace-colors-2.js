const fs = require('fs');
const path = require('path');

const files = [
  'src/app/(website)/about/page.tsx',
  'src/app/(website)/page.tsx'
];

const replacements = [
  { search: /bg-\[#F9F8F6\]/g, replace: 'bg-background' },
  { search: /text-\[#0B3B24\]/g, replace: 'text-primary' },
  { search: /bg-\[#0B3B24\]/g, replace: 'bg-primary' },
  { search: /text-\[#1C1C1C\]/g, replace: 'text-foreground' },
  { search: /border-\[#1C1C1C\]\/10/g, replace: 'border-border' },
  { search: /text-\[#C5A059\]/g, replace: 'text-secondary' },
  { search: /border-\[#C5A059\]\/30/g, replace: 'border-secondary/30' },
  { search: /border-\[#C5A059\]/g, replace: 'border-secondary' },
  { search: /bg-\[#C5A059\]/g, replace: 'bg-secondary' },
  { search: /text-\[#1C1C1C\]\/80/g, replace: 'text-foreground/80' },
  { search: /text-\[#1C1C1C\]\/60/g, replace: 'text-muted-foreground' },
  { search: /border-\[#0B3B24\]\/10/g, replace: 'border-primary/10' },
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    replacements.forEach(({ search, replace }) => {
      if (search.test(content)) {
        content = content.replace(search, replace);
        hasChanges = true;
      }
    });
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
});
