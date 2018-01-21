
function createPromise(op) {
    return new Promise((res, rej) => {

        // POI: Even if a promise executor directly invokes the operation it will prepended to the task queue
        res(op(2));
    });
}

const pInstance = createPromise((x) => x * 2);

pInstance
    .then(x => console.log(`Ret Value => ${x}`))
    .catch(e => console.log(e));

// POI: This statement will be processed first because it's in the current stack
console.log("Promise fulfilling");

/**
 * Promise fulfilling
 * Ret Value => 4
 */

/**AJAX invocation */

function ajaxAsync(url) {

    return new Promise((res, rej) => {

        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.send();

        xhr.onload = () => res(xhr.responseText);
        xhr.onerror = () => rej("Rejected !!");
    });
}

// XMLHttpRequest is not defined in node it's only available in browsers
ajaxAsync("https://developer.mozilla.org")
    .then(x => console.log(String.prototype.substr.call(x, 0, 100)))
    .then(x => ajaxAsync("https://developer.mozilla.org/en-US/docs"))
    .then(x => console.log(String.prototype.substr.call(x, 0, 100)))
    .catch(e => console.log(e + " ###"));

ajaxAsync("https://developer.org.sos")
    .then(x => console.log(String.prototype.substr.call(x, 0, 100)))
    .catch(e => console.log(e + " ###"))

    // POI: Then attached (chained) with catch works properly. So it's not that after an exception the whole chain is invalid or someting
    .then(x => ajaxAsync("https://developer.mozilla.org/en-US/docs"))
    .then(x => console.log(String.prototype.substr.call(x, 0, 100)))
    .catch(e => console.log(e + " ### ^^"));
