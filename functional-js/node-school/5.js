function check_users_valid(original_users) {

    if (!Array.isArray(original_users)) return null;
    return function (submitted_users) {

        if (!Array.isArray(submitted_users)) return null;
        
        // return submitted_users
        //     .filter(x => original_users
        //         .filter(y => y.id == x.id).length > 0).length == submitted_users.length;

        return submitted_users
            .every(x => original_users
                .some(y => y.id === x.id));
    }
}

module.exports = check_users_valid;
