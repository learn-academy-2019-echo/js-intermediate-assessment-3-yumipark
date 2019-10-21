// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

getFib = () => {
  let arr = [1, 1]
  for(let i=2; i<10; i++){
    arr.push(arr[i-2] + arr[i-1])
  } return(arr)
}

console.log(getFib())

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

oddChecker = (arr) => {
  let newArr = arr.filter(n => typeof n === "number")
  let newArr2 = newArr.filter(n => n%2 !== 0)
  return newArr2
} 

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}



// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

reverseOrderer = (arr) => {
  return arr.reverse()
}

console.log(reverseOrderer(originalArray1))
console.log(reverseOrderer(originalArray2))

// 5. Write the code that would make this test pass.

// describe("multTwo", (arr) => {
//   return arr.map(x => x * 2)
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })


var first = [3, 4, 5]
var second = [23, -9, 0]
var third = [4.5, -4.5, 12]

multTwo = (arr) => {
  return arr.map(x => x * 2)
}

console.log(multTwo(first))
console.log(multTwo(second))
console.log(multTwo(third))


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

letterCounter = (str) => {
  let arr = str.split("")
  let arr2 = arr.filter(x => x === "l")
  return arr2.length
}

console.log(letterCounter(ourString))

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

function getMiddle(str) {
        var position;
        var length;
        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }
        return str.substring(position, position + length)
    }

console.log(getMiddle(middleLetters1));
console.log(getMiddle(middleLetters2));

// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

var sphereRadius1 = 3
var sphereRadius2 = 4
var sphereRadius3 = 5

function getArea(r){
  return 4 * 3.14 * Math.pow(r, 2)
} 

console.log(getArea(sphereRadius1))
console.log(getArea(sphereRadius2))
console.log(getArea(sphereRadius3))


// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

console.log(myCar.specs)

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
