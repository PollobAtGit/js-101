const http = require('http');

const url_to_hit = process.argv[2];

http.get(url_to_hit, function (response_stream) {
    response_stream.on('data', function (str_from_chunk) {
        console.log(str_from_chunk);
    }).setEncoding('utf8');
});
