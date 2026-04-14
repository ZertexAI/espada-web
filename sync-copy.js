const { execSync } = require('child_process');
console.log('START');
try {
    execSync('xcopy imagenes public\\imagenes /Y /I /E', { stdio: 'inherit' });
    console.log('SUCCESS');
} catch (e) {
    console.error('FAIL: ' + e.message);
}
