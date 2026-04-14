const fs = require('fs');
const path = require('path');

const src = 'c:/Users/Adrian/Desktop/Espada_Web/imagenes';
const dest = 'c:/Users/Adrian/Desktop/Espada_Web/public/imagenes_new';

try {
  if (fs.existsSync(src)) {
    // If destination exists, we have to copy or delete it first
    // For safety, let's just copy files one by one into the EXISTING public/imagenes
    const realDest = 'c:/Users/Adrian/Desktop/Espada_Web/public/imagenes';
    if (!fs.existsSync(realDest)) fs.mkdirSync(realDest, { recursive: true });
    
    fs.readdirSync(src).forEach(file => {
      fs.copyFileSync(path.join(src, file), path.join(realDest, file));
    });
    console.log('Done');
  }
} catch (e) {
  console.error(e);
}
