const fs = require('fs');

const filePath = 'src/app/(website)/page.tsx';
let c = fs.readFileSync(filePath, 'utf8');

c = c.replace(/import \{ FadeIn, StaggerContainer, StaggerItem \} from "@\/components\/home\/AnimatedSection";\r?\n/, '');

c = c.replace(/<FadeIn(?: delay=\{[\d.]+\})?(?: className="([^"]+)")?(.*?)>/g, (m, cls, rest) => {
  let cn = cls ? ` className="${cls}"` : '';
  return `<div${cn}${rest}>`;
});
c = c.replace(/<\/FadeIn>/g, '</div>');

c = c.replace(/<StaggerContainer(?: className="([^"]+)")?(.*?)>/g, (m, cls, rest) => {
  let cn = cls ? ` className="${cls}"` : '';
  return `<div${cn}${rest}>`;
});
c = c.replace(/<\/StaggerContainer>/g, '</div>');

c = c.replace(/<StaggerItem(?: className="([^"]+)")?(.*?)>/g, (m, cls, rest) => {
  let cn = cls ? ` className="${cls}"` : '';
  return `<div${cn}${rest}>`;
});
c = c.replace(/<\/StaggerItem>/g, '</div>');

fs.writeFileSync(filePath, c, 'utf8');
console.log('Successfully stripped animation wrappers.');
