
const Logger = require("./logger");

class Calculator {
    constructor() {
    //part 1
    //this.id = Date.now()

    //part 2
    this.id = Math.floor (Math.random() * 100000);

    //part 3 
    this.logger = new Logger ('Calculator', this.id);
    }
    #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`)
    }
    add(num1, num2) {
    const value = num1 + num2
    this.#log(value)
    return value;
    }
     
    subtractNumbers(num1, num2) {
    const value = num1 - num2
    this.#log(value)
    return value;
    }
    
    multiplyNumbers(num1, num2) {
    const value = num1 * num2
    this.#log(value)
    return value;
    }
     
    divideNumbers(num1, num2) {
    const value = num1 / num2
    this.#log(value)
    return value;
    }
}
    module.exports = Calculator