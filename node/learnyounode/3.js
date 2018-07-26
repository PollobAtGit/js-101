const fs = require('fs');

const lines = fs.readFileSync(process.argv[2]).toString();

const total_lines_count = lines.split("\n");

console.log(total_lines_count.length - 1);