const fs = require('fs');
const path = require('path');

function fixTypeImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Fix type-only imports
  let newContent = content.replace(
    /import\s*{([^}]+)}\s*from\s*(['"].*['"])/g,
    (match, imports, source) => {
      const typeOnlyImports = imports
        .split(',')
        .map(i => i.trim())
        .filter(i => !i.includes('as') && content.indexOf(i) === content.lastIndexOf(i))
        .join(', ');
      
      const regularImports = imports
        .split(',')
        .map(i => i.trim())
        .filter(i => i.includes('as') || content.indexOf(i) !== content.lastIndexOf(i))
        .join(', ');
      
      let result = '';
      if (typeOnlyImports) {
        result += `import type { ${typeOnlyImports} } from ${source};\n`;
      }
      if (regularImports) {
        result += `import { ${regularImports} } from ${source};\n`;
      }
      return result || match;
    }
  );

  // Fix unnecessary conditionals
  newContent = newContent
    .replace(/([^!])\?\./g, '$1.')
    .replace(/\s*\?\?\s*undefined/g, '')
    .replace(/\s*\?\?\s*null/g, '');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      walkDir(filePath);
    } else if (stat.isFile() && /\.(ts|tsx)$/.test(file)) {
      fixTypeImports(filePath);
    }
  });
}

walkDir(process.cwd());
