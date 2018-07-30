const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file_location = process.argv[3];

http.createServer(function (request, response) {

    // Working version
    // fs.readFile(file_location, function (err, data_buffer) {
    //     response.end(data_buffer.toString());
    // });

    response.writeHead(200, { 'content-type': 'text/plain' });
    
    fs
        .createReadStream(file_location)
        .pipe(response);

}).listen(port);

