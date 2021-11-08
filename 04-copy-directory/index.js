const fs = require('fs');
const path = require('path');
const pathToFilesToCopy = path.join(__dirname, 'files');
const fileCopyDirPath = path.join(__dirname, 'files-copy');

fs.readdir(pathToFilesToCopy, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  fs.mkdir(fileCopyDirPath, { recursive: true }, err => {
    if (err) throw err;
  });

  for (const file of files) {
    const pathToFile = path.join(pathToFilesToCopy, file.name);

    fs.readFile(pathToFile, 'utf-8', (err, data) => {
      if (err) throw err;

      fs.writeFile(
        path.join(fileCopyDirPath, file.name),
        data,
        'utf-8',
        err => {
          if (err) throw err;
        }
      );
    });
  }
});
