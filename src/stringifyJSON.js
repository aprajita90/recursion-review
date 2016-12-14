// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // your code goes here
    var arrKeys = [];
    if (obj === null) {
        return 'null';
    } else if (typeof obj === "number" || typeof obj === "boolean") {
        return '' + obj;
    } else if (typeof obj === "string") {
        return '"' + obj + '"'
    } else if (Array.isArray(obj)) {
        return '[' + obj.map(function(element) {
            if (typeof element === 'undefined' || typeof element === 'function') {
                return 'null';
            }
            return stringifyJSON(element);
        }) + ']';

    } else if (obj instanceof Object) {
        Object.keys(obj).forEach(function(key) {
            if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {} else {
                arrKeys.push('"' + key + '":' + stringifyJSON(obj[key]));
            }
        });
        return '{' + arrKeys + '}';
    }
};