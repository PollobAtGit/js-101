function h(z) { return new Error().stack; }

function g(y) { return h(y); }

function f(f) { return g(f); }

// POI: At the end of the stack there is global scope
console.log(f(undefined));

/*
Error
    at h (C:\Users\pollob\Documents\jS\101.js:1:91)
    at g (C:\Users\pollob\Documents\jS\101.js:3:17)
    at f (C:\Users\pollob\Documents\jS\101.js:5:17)
    at Object.<anonymous> (C:\Users\pollob\Documents\jS\101.js:7:1)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)
    at Function.Module.runMain (module.js:665:10)
*/

console.log("Run-To-Completion Symantics");

// POI: Current task will always finish before task queue dispatches other task which potentially may block the event loop
setTimeout(() => console.log("RTS"), 0);

for (var i = 100000000 * 20; i >= 0; i--) { }

console.log("Done");


function ajaxAsyncHandleError(fn) {
	try {
		
		// POI: Error will be handled if this function invocation throws exception because it's a direct invocation
		fn();
	} catch(e) {
		console.log("Error Occurred: " + e);
	}
}

function ajaxAsyncMissErrorHandling(fn) {
	try {
		
		// POI: When callback function will be invoked it will be out of context so error will not be handled
		setTimeout(fn, 0);
	} catch(e) {
		console.log("Error Occurred: " + e);
	}
}

ajaxAsyncHandleError(throwError);


function ajaxAsyncPromiseLike(fn) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			try {
				fn();
				res();
			} catch(e) {
				rej(e);
			}
		}, 10000);
	});
}

const ajaxPr = ajaxAsyncPromiseLike(() => console.log("No Error"));

ajaxPr
	.then(x => console.log("Done"))
	.then(x => ajaxAsyncPromiseLike(throwError))
	.then(x => console.log("Done #1"))
	.then(x => ajaxAsyncPromiseLike(() => console.log("No Error")))
	.then(x => console.log("Done #2"))
	.catch(x => console.log("Exception Occurred From Promise like: " + x));// Exception Occurred From Promise like: Error: Error


function ajaxAsyncPromiseLikeA(fn) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			try {
				res(fn());
			} catch(e) {
				rej(e);
			}
		}, 500);
	});
}

const ajaxPrA = ajaxAsyncPromiseLikeA(() => 10);

ajaxPrA
	.then(x => console.log("Done " + x))
	.then(x => ajaxAsyncPromiseLikeA(() => 20))
	.then(x => console.log("Done #1 " + x))
	.then(x => ajaxAsyncPromiseLikeA(() => 30))
	.then(x => console.log("Done #2 " + x))
	.catch(x => console.log("Exception Occurred From Promise like: " + x));// Exception Occurred From Promise like: Error: Error

// ajaxAsyncMissErrorHandling(throwError);
/*
	ajaxAsyncMissErrorHandling(() => {
		throwError();
	});
*/

function throwError() { throw new Error("Error"); }
