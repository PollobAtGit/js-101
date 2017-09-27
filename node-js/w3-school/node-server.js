
var httpMod = require('http');
var urlMod = require('url');
var fileServerMod = require('fs');
var dateMod = require('./current-date-module.js');
var upperCaseMod = require('upper-case');
var eventsMod = require('events');
var formidableMod = require('formidable');

var eventEmitter = new eventsMod.EventEmitter();

var prnt = function (data) {
    console.log(data);
}

// POI: Registering a event & it's event handler
// POI: Custom event. It's not defined from earlier
eventEmitter.on('invoke', () => console.log("Invoking Print"));

httpMod.createServer(function (req, res) {

    if (req.url === '/upload-file') {

        prnt('Attempt to upload file');

        var form = formidableMod.IncomingForm();
        form.parse(req, (err, fields, files) => {
            fileServerMod.rename(files.fileToUpload.path, files.fileToUpload.name, (err) => {

                var message = "";

                if (err) {
                    message = "SOME WENT WRONG WITH FILE UPLOAD";
                } else {
                    message = "file upload successful";
                }

                res.write(upperCaseMod(message), (err) => res.end());
            });
        });
    } else {

        var pageToServe = urlMod.parse(req.url, true).query.page.concat(".html");

        console.log("Attempting to serve: " + pageToServe);

        if (pageToServe) {
            fileServerMod.readFile(pageToServe, function (err, data) {

                var errorCode = 0;
                var contentType = 'text/html';
                var fileContent = '';

                if (!err) {
                    errorCode = 200;
                    fileContent = data;
                } else {
                    errorCode = 200;
                    fileContent = upperCaseMod("File Doesn't Exists");
                }

                res.writeHead(errorCode, { 'Content-Type': contentType });
                res.write(fileContent, (err) => res.end());
            });
        } else {
            // TODO: Code will never reach here
            res.write(upperCaseMod('Query string is empty'), (err) => res.end());
        }
    }

    // POI: Emitting a event
    eventEmitter.emit('invoke');

}).listen(8080);

console.log('Server Is Running');
