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

function isVowel (arg) {
    if (arg === `a` || arg === `e` || arg === `i` || arg === `o` || arg === `u` || arg === `A` || arg === `E` || arg === `I` || arg === `O` || arg === `U`) {
        return true;
    } else {
        return false;
    }
}

function add (input, input1) {
    if (isNaN(parseFloat(input)) === true || isNaN(parseFloat(input1)) === true) {
        return false;
    } else {
        return parseFloat(input) + parseFloat(input1);
    }
}