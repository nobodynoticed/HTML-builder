const fs = require('fs');
const path = require('path');
const srcPathToDir = path.join(__dirname, 'styles');
const distPathToDir = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(srcPathToDir, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  const stream = fs.createWriteStream(distPathToDir);

  for (const file of files) {
    const isCssFile =
      file.isFile() &&
      path.extname(path.join(srcPathToDir, file.name)) === '.css';

    if (isCssFile) {
      const readStream = fs.createReadStream(
        path.join(srcPathToDir, file.name),
        'utf-8'
      );

      readStream.pipe(stream);
    }
  }
});
