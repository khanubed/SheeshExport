const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find variants
const variantRegex = /name:\s*"([^"]+)",[\s\S]*?shortDescription:\s*"([^"]+)",[\s\S]*?originStory:\s*{\s*location:\s*"([^"]+)",\s*story:\s*"([^"]+)",/g;

let match;
let newContent = content;

// Build a list of replacements
const replacements = [];

while ((match = variantRegex.exec(content)) !== null) {
  const fullMatch = match[0];
  const variantName = match[1];
  const shortDesc = match[2];
  const location = match[3];
  const originalStory = match[4];

  // Create a unique story by injecting the variant name and short description
  // We'll just take the first sentence of the original story, add a sentence about the variant, then the last sentence.
  
  const sentences = originalStory.split('. ');
  let firstSentence = sentences[0] + '.';
  let lastSentence = sentences[sentences.length - 1];
  if (!lastSentence.endsWith('.')) lastSentence += '.';
  
  // Custom sentence based on the variant
  let uniqueSentence = `The ${variantName.replace(/\s*\(.*?\)\s*/g, '')} grade is specifically prized because it is ${shortDesc.toLowerCase().replace(/\.$/, '')}.`;

  const newStory = `${firstSentence} ${uniqueSentence} ${lastSentence}`;

  // Replace the old story string with the new story string in the full match
  const newMatch = fullMatch.replace(`story:\n            "${originalStory}"`, `story:\n            "${newStory}"`)
                            .replace(`story:\r\n            "${originalStory}"`, `story:\r\n            "${newStory}"`)
                            .replace(`story:\n              "${originalStory}"`, `story:\n              "${newStory}"`)
                            .replace(`story:\r\n              "${originalStory}"`, `story:\r\n              "${newStory}"`)
                            .replace(`story:\n          "${originalStory}"`, `story:\n          "${newStory}"`)
                            .replace(`story:\r\n          "${originalStory}"`, `story:\r\n          "${newStory}"`)
                            .replace(`story: "${originalStory}"`, `story: "${newStory}"`);

  replacements.push({ old: fullMatch, new: newMatch });
}

for (const rep of replacements) {
  newContent = newContent.replace(rep.old, rep.new);
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Updated ${replacements.length} variants with unique origin stories.`);
