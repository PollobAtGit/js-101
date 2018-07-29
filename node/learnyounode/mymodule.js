const fs = require('fs');

module.exports = function filter_directory_files_by_extension(directory_to_search, file_extension_to_search, operation_on_completion) {
    if (typeof (directory_to_search) === "string") {
        fs.readdir(directory_to_search, function (err, file_list) {
            if (err) {
                return operation_on_completion(err);
            }
            file_list
                .filter(x => x.endsWith(`.${file_extension_to_search}`))
                .forEach(x => operation_on_completion(null, x));
        });
    }
}
