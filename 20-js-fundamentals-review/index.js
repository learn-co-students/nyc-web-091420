// ***** Question 1 *****
let counter = 1
counter = counter + 1

// *** Uncomment the lines below to test
console.log("%cQuestion 1", "color: red") 
console.log(counter) 
// => 2
console.log("%c----------", "color: red") 


// ***** Question 2 *****
const name = "Ian"
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
console.log("%cQuestion 2", "color: red") 

console.log(name)
// => "Ian"
// name = "Not Ian" 
// => TypeError
console.log("%c----------", "color: red") 



// ***** Question 3 *****
// def drink_water(current_thirst_level)
//   puts "Man I sure am thirsty"
//   current_thirst_level -= 1
//   puts "Ahh that hits the spot"
//   current_thirst_level
// end

function drinkWater(currentThirstLevel) {
  console.log("Man I sure am thirsty")
  currentThirstLevel -= 1
  console.log("Ahh that hits the spot")
  return currentThirstLevel
}

// *** Uncomment the lines below to test
console.log("%cQuestion 3", "color: red") 

console.log(drinkWater(12))
// => "Man I sure am thirsty"
// => "Ahh that hits the spot"
// => 11
console.log("%c----------", "color: red") 



// ***** Question 4 *****
// Write a function `sameSameButDifferent` that takes in two arguments, `num` and `maybeNum`. 
// If `num` and `maybeNum` are both numbers, and the same value, it should return `"same same"`. 
// If `num` is the same value as `maybeNum` after converting `maybeNum` to a number, it should return `"same same (but different)"`. 
// Otherwise, it should return `"different"`.
function sameSameButDifferent(num, maybeNum) {
  if (num === maybeNum) {
    return "same same"
  } else if (num === parseInt(maybeNum)) {
    return "same same (but different)"
  } else {
    return "different"
  }
}

// *** Uncomment the lines below to test
console.log("%cQuestion 4", "color: red") 

console.log(sameSameButDifferent(5, 5)) 
// => "same same"

console.log(sameSameButDifferent(123, "123")) 
// => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// => "different"

console.log(sameSameButDifferent(123, "122")) 
// => "different"
console.log("%c----------", "color: red") 



// ***** Question 5 *****
function updateGrade(student, grade) {
  student.grade = grade
}

// *** Uncomment the lines below to test
console.log("%cQuestion 5", "color: red")

const student1 = { 
  name: "Duane", 
  grade: 88 
}

updateGrade(student1, 92)
console.log(student1)  
// => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red") 



// ***** Question 6 *****
// def print_name_and_phones(users)
//   users.each do |user_hash|
//     puts user_hash[:name]
//     puts "Cell: #{user_hash[:phones][:cell]}"
//     puts "Office: #{user_hash[:phones][:office]}"
//   end
// end

function showUserInfo(beef) {
  console.log(beef.name)
  console.log(`Cell: ${beef.phones.cell}`)
  console.log(`Office: ${beef.phones.office}`)
}

function printNameAndPhones(users) {
  
  // users.forEach(showUserInfo)

  users.forEach(function (userObj) {
    console.log(userObj.name)
    console.log(`Cell: ${userObj.phones.cell}`)
    console.log(`Office: ${userObj.phones.office}`)
  })
}

// *** Uncomment the lines below to test
// console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]
printNameAndPhones(users)
// => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****
function triple(num) {
  return num * 3
}

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 1", "color: red")

console.log(myMap([1,2,3,4,5], triple)) 
// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
function greet(name) {
  return `Hi, ${name}!`
}

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 2", "color: red")

console.log(myMap(["Ian", "Chase"], greet)) 
// => ["Hi, Ian!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****
let ticketNumber = 0

function takeATicketNumber(line) {
  ticketNumber++
  line.push(ticketNumber)
  return `Welcome. You are ticket number ${ticketNumber}`
}

// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 1", "color: red")

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 2`

console.log(nowServing(line))
// => `Currently serving 1.`

console.log(nowServing(line))
// => `Currently serving 2.`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 3`
console.log("%c----------", "color: red") 


// ***** Scope & Closures - Question 2 *****
function ticketNumberGeneratorFunc() {
  let ticketNumber = 0
  function takeATicketNumber(line) {
    ticketNumber++
    line.push(ticketNumber)
    return `Welcome. You are ticket number ${ticketNumber}`
  }
  return takeATicketNumber
}

// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 2", "color: red")

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`

console.log(takeATicketNumberFunc(line))
// => `Welcome. You are ticket number 3`
console.log("%c----------", "color: red") 