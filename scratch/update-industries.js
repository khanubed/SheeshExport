const fs = require('fs');

const path = './src/lib/data/industries.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Update the interface
content = content.replace(
  '  heroImage: string;',
  '  heroImage: string;\n  workflowImage?: string;\n  caseStudyImage?: string;'
);

// 2. Add placeholder images for each industry
const additions = [
  { slug: 'food-manufacturing', w: '/images/about/factory-processing.jpg', c: '/images/about/infra-warehouse.jpeg' },
  { slug: 'importers-distributors', w: '/images/about/global-delivery.jpeg', c: '/images/about/infra-sourcing.png' },
  { slug: 'retail-private-label', w: '/images/about/infra-packaging.jpeg', c: '/images/about/factory-processing.jpg' },
  { slug: 'horeca-hospitality', w: '/images/about/infra-testing.jpeg', c: '/images/about/global-delivery.jpeg' },
  { slug: 'nutraceuticals-supplements', w: '/images/about/infra-warehouse.jpeg', c: '/images/about/infra-testing.jpeg' },
  { slug: 'spice-blenders-seasoning', w: '/images/about/factory-processing.jpg', c: '/images/about/infra-sourcing.png' },
  { slug: 'oleoresin-extractors', w: '/images/about/infra-sourcing.png', c: '/images/about/infra-packaging.jpeg' }
];

for (const add of additions) {
  const regex = new RegExp(`(slug:\\s*"${add.slug}",[^]*?heroImage:[^]*?\\n)`);
  content = content.replace(regex, `$1    workflowImage: "${add.w}",\n    caseStudyImage: "${add.c}",\n`);
}

fs.writeFileSync(path, content);
console.log('Industries data updated with new images!');
