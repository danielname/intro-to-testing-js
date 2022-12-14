// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// unit tests for the saHello function
describe(`sayHello`, function() {
    describe(`Core Functionality`, function(){
        it('should be a defined function', function () {
            expect(typeof sayHello).toBe('function');
        });
        it('should return a string', function () {
            expect(typeof sayHello()).toBe(`string`);
        });
        it('should return `Hello, Jane!` when `Jane` is entered as an argument.', function () {
            expect(sayHello(`Jane`)).toBe(`Hello, Jane!`);
        });
        it('should return `Hello, Alex!` when `Alex` is entered as an argument.', function () {
            expect(sayHello(`Alex`)).toBe(`Hello, Alex!`);
        });
        it('should return `Hello, Pat!` when `Pat` is entered as an argument.', function () {
            expect(sayHello(`Pat`)).toBe(`Hello, Pat!`);
        });
        it('should return any name that is inputted as an argument.', function () {
            expect(sayHello(`fdoshfgorahgondf`)).toBe(`Hello, fdoshfgorahgondf!`);
        });
    })
    describe(`Validation Test Suite`, function(){
        it('should return `Hello, World!` when the boolean `true` is entered as an argument.', function () {
            expect(sayHello(true)).toBe(`Hello, World!`);
        });
        it('should return `Hello, World!` when the boolean `false` is entered as an argument.', function () {
            expect(sayHello(false)).toBe(`Hello, World!`);
        });
        it('should return `Hello, World!` when the null is entered as an argument.', function () {
            expect(sayHello(null)).toBe(`Hello, World!`);
        });
        it('should return `Hello, World!` when a number is entered as an argument.', function () {
            expect(sayHello(4.2)).toBe(`Hello, World!`);
        });
        it('should return `Hello, World!` when an empty string is entered as an argument.', function () {
            expect(sayHello("")).toBe(`Hello, World!`);
        });
        it('should return `Hello, World!` when a numeric string is entered as an argument.', function () {
            expect(sayHello("14812746")).toBe(`Hello, World!`);
        });
        it('should not return `undefined` when called', function () {
            expect(sayHello()).not.toBe(undefined);
        });
    })
})

describe('isFive', function (){
        it('should be a defined function', function () {
            expect(typeof isFive).toBe('function');
        });
        it('should return a boolean', function () {
            expect(typeof isFive()).toBe(`boolean`);
        });
        it('should return `true` when passed 5', function () {
            expect(isFive(5)).toBe(true);
        });
        it('should return `true` when passed the numeric string "5"', function () {
            expect(isFive(`5`)).toBe(true);
        });
        it('should return `true` when passed the string "five"', function () {
            expect(isFive(`five`)).toBe(true);
        });
        it('should return `false` when passed a boolean', function () {
        expect(isFive(true)).toBe(false);
        });
        it('should return `false` when passed null', function () {
        expect(isFive(null)).toBe(false);
        });
        it('should return `false` when no argument is entered', function () {
            expect(isFive(undefined)).toBe(false);
        });
        it('should return `false` when any number that is not 5 is passed', function () {
        expect(isFive(Math.ceil(Math.random()*9999999999) + 5.1)).toBe(false);
        });
})

describe(`isEven`, function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe(`boolean`);
    });
    it('should return `true` when passed a positive even number', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return `true` when passed a negative even number', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return `false` when passed a positive odd number', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return `false` when passed a negative odd number', function () {
        expect(isEven(-5)).toBe(false);
    });
    it('should return `false` when passed a non-numeric string', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return `false` when passed a boolean', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return `false` when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return `true` when passed an even numeric string', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return `false` when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
    it('should return `false` when passed 0', function () {
        expect(isEven(0)).toBe(false);
    });
})

describe(`isVowel`, function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe(`boolean`);
    });
    it('should return `true` when passed a lowercase vowel string', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return `true` when passed an uppercase vowel string', function () {
        expect(isVowel("E")).toBe(true);
    });
    it('should return `false` when passed a number', function () {
        expect(isVowel(5)).toBe(false);
    });
    it('should return `false` when passed a boolean', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return `false` when passed a string that is more than one letter long', function () {
        expect(isVowel(`candy`)).toBe(false);
    });
    it('should return `false` when passed an empty string', function () {
        expect(isVowel(``)).toBe(false);
    });
    it('should return `false` when passed null', function () {
        expect(isVowel(null)).toBe(false);
    });
    it('should return `false` when called without an argument', function () {
        expect(isVowel(undefined)).toBe(false);
    });
    it('should reject "y" as a vowel', function () {
        expect(isVowel("y")).toBe(false);
    });
})

describe('add', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof add).toBe('function');
        });
        it('should return a number when passed two numbers', function() {
            expect(typeof (add(1, 2))).toBe('number');
        });
        it('should return 4 when passed 1 and 3', function() {
            expect(add(1, 3)).toBe(4);
        });
        it('should return ' + (19 + 2) + ' when passed ' + 19 + ' and 2', function() {
            expect(add(19, 2)).toBe(19 + 2);
        });
        it('should return 5 when passed the numeric strings "2" and "3".', function() {
            expect(add("2", "3")).toBe(5);
        });
        it('should return false when called with no arguments', function() {
            expect(add()).toBe(false);
        });
    });
    describe('validation', function() {
        it('should return false when passed one numeric input and one non-number input', function() {
            expect(add("Bob", 2)).toBe(false);
        });
        it('should return false when passed null', function() {
            expect(add(null)).toBe(false);
        });
        it('should return false when passed non-numeric strings', function() {
            expect(add("Bob", "Jane")).toBe(false);
        });
        it('should return false when passed two true boolean arguments', function() {
            expect(add(true, true)).toBe(false);
        });
        it('should return false when passed two false boolean arguments', function() {
            expect(add(false, false)).toBe(false);
        });
        it('should return false when passed a true and a false argument', function() {
            expect(add(true, false)).toBe(false);
        });
        it('should return false when passed an array', function() {
            expect(add([2,4])).toBe(false);
        });
        it('should return false when passed an object', function() {
            expect(add({number1:2,number2:4})).toBe(false);
        });
    });
});