
function internal_log() {
    try {
        console.log.apply(console, arguments)
    } catch (eConsole) {
        try {
            opera.postError.apply(opera, arguments)
        } catch (eOpera) {
            alert(Array.prototype.join.call(arguments, ""))
        }
    }
}

internal_log("456", 7, {})