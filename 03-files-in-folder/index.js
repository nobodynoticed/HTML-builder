const fs = require('fs');
const path = require('path');
const pathToFiles = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFiles, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  for (const item of files) {
    if (item.isFile()) {
      const file = path.join(pathToFiles, item.name);

      fs.stat(file, (err, stats) => {
        if (err) throw err;

        console.log(
          `${path.parse(file).name} - ${path.extname(file)} - ${
            stats.size / 1000
          }kb`
        );
      });
    }
  }
});
