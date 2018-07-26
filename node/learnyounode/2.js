// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\pollob\\Documents\\node-js\\learnyounode\\2.js',
//   '1',
//   '2',
//   '3' ]

// console.log(process.argv);
// console.log(Array.isArray(process.argv));// true

const len = process.argv.length;

console.log(process.argv.splice(2).reduce((a, b) => Number(a) + Number(b), 0));