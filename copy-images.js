const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'imagenes');
const dest = path.join(__dirname, 'public', 'imagenes');

function copyDir(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  for (const file of fs.readdirSync(from)) {
    const srcFile = path.join(from, file);
    const destFile = path.join(to, file);
    if (fs.statSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
      console.log('Copied:', file);
    }
  }
}

copyDir(src, dest);
console.log('All images copied to public/imagenes/');
