const http = require('http');
const through_two_map = require("through2-map");

const post_http_method = "POST";

http.createServer(function (request, response) {
    if (request.method !== post_http_method) {
        return response.end("WE ACCEPT ONLY POST REQUESTS")
    }

    // request.on("data", function (data_buffer) {
    //     response.write(data_buffer.toString().toUpperCase());
    // });

    // POI: How does through2-map works?
    request.pipe(through_two_map(function (data_buffer) {
        if (!data_buffer instanceof Buffer) return;
        return data_buffer.toString().toUpperCase();
    })).pipe(response);

}).listen(process.argv[2]);

