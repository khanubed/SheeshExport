const fs = require('fs');
const path = require('path');

const files = [
  'src/app/(website)/request-quote/page.tsx',
  'src/app/(website)/contact/page.tsx',
  'src/app/(website)/services/page.tsx',
  'src/app/(website)/services/bulk-export/page.tsx',
  'src/app/(website)/services/mixed-container/page.tsx',
  'src/app/(website)/services/private-label/page.tsx',
  'src/app/(website)/quality/page.tsx',
  'src/app/(website)/certifications/page.tsx',
  'src/app/(website)/certifications/[slug]/page.tsx',
  'src/app/(website)/export-process/page.tsx',
  'src/app/(website)/about/page.tsx',
  'src/app/(website)/page.tsx'
];

const replacements = [
  { search: /bg-\[#F7F5F0\]/g, replace: 'bg-background' },
  { search: /text-\[#0B2F26\]/g, replace: 'text-primary' },
  { search: /bg-\[#0B2F26\]/g, replace: 'bg-primary' },
  { search: /text-\[#1E1E1E\]/g, replace: 'text-foreground' },
  { search: /border-\[#1E1E1E\]\/10/g, replace: 'border-border' },
  { search: /border-\[#1E1E1E\]\/20/g, replace: 'border-input' },
  { search: /text-\[#C8A96B\]/g, replace: 'text-secondary' },
  { search: /border-\[#C8A96B\]/g, replace: 'border-secondary' },
  { search: /bg-\[#C8A96B\]/g, replace: 'bg-secondary' },
  { search: /accent-\[#0B2F26\]/g, replace: 'accent-primary' },
  { search: /text-\[#1E1E1E\]\/60/g, replace: 'text-muted-foreground' },
  { search: /text-\[#1E1E1E\]\/70/g, replace: 'text-muted-foreground' },
  { search: /text-\[#1E1E1E\]\/50/g, replace: 'text-muted-foreground' },
  { search: /text-\[#1E1E1E\]\/30/g, replace: 'text-muted-foreground' },
  { search: /text-\[#1E1E1E\]\/80/g, replace: 'text-foreground/80' },
  { search: /text-\[#1E1E1E\]\/40/g, replace: 'text-muted-foreground' },
  { search: /border-\[#C8A96B\]\/30/g, replace: 'border-secondary/30' },
  { search: /bg-\[#1E1E1E\]\/5/g, replace: 'bg-muted' }
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
