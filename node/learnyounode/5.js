const fs = require('fs');

const file_extension = process.argv[3];
const directory_path = process.argv[2];

fs.readdir(directory_path, function (err, file_list) {
    file_list
        .filter(x => x.endsWith(`.${file_extension}`))
        .forEach(x => console.log(x));
});