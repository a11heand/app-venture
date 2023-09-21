/*****************************************
 * Filename: SophisticatedCode.js
 * Description: Complex and Elaborate JavaScript Code
 *****************************************/

// Declare an array of objects representing employees
const employees = [
  {
    id: 1,
    name: "John Smith",
    department: "Development",
    salary: 60000
  },
  {
    id: 2,
    name: "Jane Doe",
    department: "Design",
    salary: 55000
  },
  // ... Add more employee objects here
];

// Define a class for managing employees
class EmployeeManager {
  constructor(employees) {
    this.employees = employees;
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployeeById(id) {
    return this.employees.find(employee => employee.id === id);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(id) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}

// Create an instance of EmployeeManager
const employeeManager = new EmployeeManager(employees);

// Declare a function to calculate the average salary of all employees
function calculateAverageSalary() {
  const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
  return totalSalary / employees.length;
}

// Call the function to calculate average salary
const averageSalary = calculateAverageSalary();
console.log("Average Salary:", averageSalary);

// Implement a complex algorithm that prints a Fibonacci series up to a given limit
function fibonacciSeries(limit) {
  let fibonacciArr = [0, 1];
  for (let i = 2; i < limit; i++) {
    const nextNumber = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    fibonacciArr.push(nextNumber);
  }
  return fibonacciArr;
}

console.log("Fibonacci Series:", fibonacciSeries(10));

// Define a class for calculating the area and circumference of a circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Create an instance of Circle
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());
console.log("Circle Circumference:", circle.calculateCircumference());

// Implement a complex sorting algorithm using merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Test the merge sort algorithm
const unsortedArr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Merge Sorted Array:", mergeSort(unsortedArr));

// ... Continue with more advanced and complex code

/*****************************************
 * End of code
 *****************************************/