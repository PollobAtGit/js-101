const my_http_module = require('./bl-http-get')
const http = require('http');
const bl = require('bl');

let urls_to_download_data_from = process.argv;

urls_to_download_data_from = urls_to_download_data_from.slice(2);

// POI: forEach is making it async
// urls_to_download_data_from
//     .forEach((url, index) => my_http_module(url, (err, data) => console.log(data)))

// order is not right
// function download_data(url) {
//     http.get(url, function (response_stream) {
//         response_stream.pipe(bl(function (err, data) {

//             console.log(data.toString());
//             const next_url = urls_to_download_data_from.pop();
//             if (next_url) {
//                 download_data(next_url);
//             }
//         }));
//     });
// }

// download_data(urls_to_download_data_from.pop());

function download_data(url, current_index) {
    http.get(url, function (response_stream) {
        response_stream.pipe(bl(function (err, data) {

            console.log(data.toString());
            const forward_index = current_index + 1;

            if (forward_index < urls_to_download_data_from.length) {
                download_data(urls_to_download_data_from[forward_index], forward_index);
            }
        }));
    });
}

download_data(urls_to_download_data_from[0], 0);


/**Why doesn't index works */

// for (let i = 0; i < urls_length; i++) {
//     download_data(urls_to_download_data_from[i]);
// }

// console.log("DONE" + downloaded_results.length);
// downloaded_results.forEach(x => console.log(x))

// setTimeout(() => {
//     console.log("DONE" + downloaded_results.length);
//     downloaded_results.forEach(x => console.log(x))
// }, 10000);

// function t() {

//     for (let i = 0; i < 3; i++) {
//         (() => {
//             my_http_module(urls_to_download_data_from[0], function (err, data) {
//                 console.log(data);
//                 my_http_module(urls_to_download_data_from[1], function (err, data) {
//                     console.log(data);
//                     my_http_module(urls_to_download_data_from[2], function (err, data) {
//                         console.log(data);
//                     })
//                 })
//             });
//         })();
//         console.log("f");
//     }
// }

// t()

// function t(tt) {
//     setTimeout(() => console.log("tt => " + tt), 2000);
// }

// t(58)

/**
 * 
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
 */
