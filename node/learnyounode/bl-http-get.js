const http = require('http');
const bl = require('bl');

module.exports = function download_data_via_url(url_to_download_data_from, operation_on_completion) {
    http.get(url_to_download_data_from, function (response_stream) {
        response_stream.pipe(bl(function (err, data) {
            if (err) {
                return operation_on_completion(err);
            } else if (data) {
                return operation_on_completion(null, data.toString());
            }
        }));
    });
}