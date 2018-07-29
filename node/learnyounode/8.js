const my_http_module = require('./bl-http-get');

const url_to_load_data_from = process.argv[2];

my_http_module(url_to_load_data_from, function (err, data) {
    if (err) {
        console.log("!ERROR");
    }
    else {
        if (typeof (data) == "string") {
            console.log(data.length);
            console.log(data);
        }
    }
});
