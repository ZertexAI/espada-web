const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'imagenes');
const dest = path.join(__dirname, 'public', 'imagenes');

console.log('Starting copy from:', src);
console.log('Target destination:', dest);

if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
  console.log('Created public directory');
}

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest);
  console.log('Created public/imagenes directory');
}

const files = fs.readdirSync(src);
console.log(`Found ${files.length} files to copy`);

files.forEach(file => {
  const srcFile = path.join(src, file);
  const destFile = path.join(dest, file);
  
  if (fs.statSync(srcFile).isFile()) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied: ${file}`);
  }
});

console.log('Migration of images completed successfully');
