// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (typeof input !== `string` || input === "" || isNaN(parseFloat(input)) === false) {
        return `Hello, World!`;
    } else {
        return `Hello, ${input}!`;
    }
}

function isFive(arg) {
    if (arg == 5 || arg === `five`) {
        return true;
    } else {
        return false;
    }
}

function isEven (arg) {
    if (arg === 0 || arg === true || arg === false) {
        return false;
    } else {
        return arg % 2 === 0;
    }
}

