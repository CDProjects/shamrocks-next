const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'src', 'Images');

fs.readdirSync(imageDir).forEach(file => {
  if (file.match(/\.(jpg|png)$/i)) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, file.replace(/\.(jpg|png)$/i, '.webp'));
    webp.cwebp(inputPath, outputPath, "-q 80", logging="-v");
  }
});