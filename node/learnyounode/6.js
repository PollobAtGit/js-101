const mymodule = require('./mymodule');

const file_extension = process.argv[3];
const directory = process.argv[2];

mymodule(directory, file_extension, (err, data) => console.log(err ? "ERROR!" : data));
