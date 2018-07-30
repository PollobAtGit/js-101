function get_short_messages(list_of_messages) {

    if (!Array.isArray(list_of_messages)) return;
    return list_of_messages
        .filter(x => "message" in x && typeof (x.message) === "string" && x.message.length < 50)
        .map(x => x.message);
}

module.exports = get_short_messages;