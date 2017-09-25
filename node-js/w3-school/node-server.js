
var http = require('http');
var url = require('url');
var fileServer = require('fs');
var dateModule = require('./current-date-module.js');

http.createServer(function(req, res) {
    
    fileServer.readFile('s.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
    
        var queryString = url.parse(req.url, true);
        console.log(queryString.query);
        console.log(queryString.query.id);
    
        res.write(data);
    
        fileServer.appendFile('s-clone.html', data, function(err) {
            if(err) {
                throw err;
            }
            console.log('SAVED!');
        });

        res.end();
    });

}).listen(8080);

console.log('Server Is Running');
    //res.write('\r\nHello World! Node Server Is Running & Current Time Is: ' + dateModule.myDate());
