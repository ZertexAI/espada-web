const fs = require('fs');
console.log('START');
try {
    fs.rmSync('c:/Users/Adrian/Desktop/Espada_Web/public', { recursive: true, force: true });
    console.log('REMOVED PUBLIC');
    fs.renameSync('c:/Users/Adrian/Desktop/Espada_Web/imagenes', 'c:/Users/Adrian/Desktop/Espada_Web/public');
    console.log('RENAMED IMAGENES TO PUBLIC');
} catch (e) {
    console.error(e);
}
