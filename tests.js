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
describe(`sayHello`, function() {
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
        expect(sayHello(input)).toBe(`Hello, ${input}!`);
    });
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
})