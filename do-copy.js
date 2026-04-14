const fs = require('fs');
const path = require('path');

const src = 'c:/Users/Adrian/Desktop/Espada_Web/imagenes';
const dest = 'c:/Users/Adrian/Desktop/Espada_Web/public/imagenes';

console.log('START');
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

const files = fs.readdirSync(src);
files.forEach(f => {
    fs.copyFileSync(path.join(src, f), path.join(dest, f));
    console.log('COPIED: ' + f);
});
console.log('FINISH');
