// Filename: AdvancedCalculator.js

/*
   Advanced Calculator

   This code represents an advanced calculator with a wide range of mathematical operations.
   It includes functions for basic arithmetic, trigonometry, logarithmic operations, statistical calculations, and more.

   It is intentionally complex and elaborate to showcase the capabilities and flexibility of JavaScript.

   Author: Your Name
   Date: Today's Date
*/

// Basic Arithmetic Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Trigonometric Functions
function sine(angle) {
  return Math.sin(angle);
}

function cosine(angle) {
  return Math.cos(angle);
}

function tangent(angle) {
  return Math.tan(angle);
}

// Logarithmic Functions
function logarithm(number, base) {
  return Math.log(number) / Math.log(base);
}

function naturalLogarithm(number) {
  return Math.log(number);
}

// Statistical Functions
function mean(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

function median(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const midIndex = Math.floor(sortedNumbers.length / 2);
  return sortedNumbers.length % 2 === 0
    ? (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2
    : sortedNumbers[midIndex];
}

function range(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}

// ... (additional functions)

// Main Program
function runCalculator() {
  console.log("-------------------------------------------");
  console.log("        Welcome to the Advanced Calculator        ");
  console.log("-------------------------------------------");
  console.log("");

  // Example Usage
  const result1 = add(4, 5);
  console.log("4 + 5 =", result1);

  const result2 = multiply(result1, 10);
  console.log(result1, " * 10 =", result2);

  const result3 = logarithm(100, 10);
  console.log("log base 10 of 100 =", result3);

  const numberList = [2, 6, 8, 4, 10];
  const result4 = mean(numberList);
  console.log("Mean of", numberList, "=", result4);

  // ... (more calculations)

  console.log("");
  console.log("-------------------------------------------");
  console.log("          Thank you for using the Advanced Calculator!          ");
  console.log("-------------------------------------------");
}

// Execute the calculator
runCalculator();