module.exports = function upperCaser(input) {
    if (typeof (input) !== "string") return null;
    return input.toUpperCase();
}