const fs = require('fs');

const lines = fs.readFile(process.argv[2], function (err, content) {
    const total_lines_count = content.toString().split("\n");
    console.log(total_lines_count.length - 1);
});
