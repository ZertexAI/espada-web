const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/Adrian/Desktop/Espada_Web';
const srcDir = path.join(projectRoot, 'imagenes');
const destDir = path.join(projectRoot, 'public', 'imagenes');

console.log('Sync migration started...');

try {
  if (!fs.existsSync(srcDir)) {
    console.error('Source directory not found:', srcDir);
    process.exit(1);
  }

  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created destination directory:', destDir);

  const files = fs.readdirSync(srcDir);
  let count = 0;

  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied:', file);
      count++;
    }
  });

  console.log(`Success: Migrated ${count} files.`);
} catch (err) {
  console.error('Error during migration:', err);
  process.exit(1);
}
