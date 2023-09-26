// Filename: ComplexNumberMath.js
/*
 * This code implements a library for performing complex number computations.
 * It provides various functions for operations like addition, subtraction,
 * multiplication, division, exponentiation, and more on complex numbers.
 * The library is designed to be efficient, reliable, and reusable in various applications.
 * Author: Your Name
 * Date: Today's Date
 */

// Defining the ComplexNumber class
class ComplexNumber {
    constructor(real, imaginary) {
        this.realPart = real;
        this.imaginaryPart = imaginary;
    }

    // Method to add two complex numbers
    add(other) {
        const real = this.realPart + other.realPart;
        const imaginary = this.imaginaryPart + other.imaginaryPart;
        return new ComplexNumber(real, imaginary);
    }

    // Method to subtract a complex number from another
    subtract(other) {
        const real = this.realPart - other.realPart;
        const imaginary = this.imaginaryPart - other.imaginaryPart;
        return new ComplexNumber(real, imaginary);
    }

    // Method to multiply two complex numbers
    multiply(other) {
        const real = (this.realPart * other.realPart) - (this.imaginaryPart * other.imaginaryPart);
        const imaginary = (this.imaginaryPart * other.realPart) + (this.realPart * other.imaginaryPart);
        return new ComplexNumber(real, imaginary);
    }

    // Method to divide a complex number by another
    divide(other) {
        const denominator = (other.realPart * other.realPart) + (other.imaginaryPart * other.imaginaryPart);
        const real = ((this.realPart * other.realPart) + (this.imaginaryPart * other.imaginaryPart)) / denominator;
        const imaginary = ((this.imaginaryPart * other.realPart) - (this.realPart * other.imaginaryPart)) / denominator;
        return new ComplexNumber(real, imaginary);
    }

    // Method to compute the modulus of a complex number
    modulus() {
        return Math.sqrt((this.realPart * this.realPart) + (this.imaginaryPart * this.imaginaryPart));
    }

    // Method to compute the square of a complex number
    square() {
        const real = (this.realPart * this.realPart) - (this.imaginaryPart * this.imaginaryPart);
        const imaginary = 2 * (this.realPart * this.imaginaryPart);
        return new ComplexNumber(real, imaginary);
    }

    // More methods for complex number operations can be added here
    // ...

    // Method to get the string representation of a complex number
    toString() {
        return `${this.realPart} + ${this.imaginaryPart}i`;
    }
}

// Example usage of the ComplexNumber class
const complexNum1 = new ComplexNumber(3, 4);
const complexNum2 = new ComplexNumber(1, 2);

const sum = complexNum1.add(complexNum2);
console.log(`Sum: ${sum}`);

const difference = complexNum1.subtract(complexNum2);
console.log(`Difference: ${difference}`);

const product = complexNum1.multiply(complexNum2);
console.log(`Product: ${product}`);

const quotient = complexNum1.divide(complexNum2);
console.log(`Quotient: ${quotient}`);

const modulus = complexNum1.modulus();
console.log(`Modulus: ${modulus}`);

const square = complexNum1.square();
console.log(`Square: ${square}`);

// More complex number computations can be performed here
// ...

// End of code