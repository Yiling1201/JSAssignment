function multiplyByItself(number) {
  return number * number;
}
console.log(multiplyByItself(4))


const number1 = 2
const number2 = 6
function averageOfTwoNumbers(number1, number2) {
  return (number1 + number2)/2;
}
console.log(averageOfTwoNumbers(number1, number2)); //


////
function averageOfTwoNumbers(number1, number2) {
  return (number1 + number2)/2;
}
console.log(averageOfTwoNumbers(2, 6)); //


const firstName = "Ben";
const lastName = "Ting";
function welcomeMessage(firstName, lastName) {
  return "Welcome " + firstName + " " + lastName;
}
console.log(welcomeMessage(firstName, lastName));



function welcome(firstName, lastName){
return "Welcome" + firstName + " " +lastName;
}
console.log(welcome("Jane","Yo"))



function getRandomInt(){
  return Math.floor(Math.random()*3);
}
console.log(getRandomInt());


function convertNumber(number) {
  if (number === 0) {
    return "A";
  }

  if (number === 1) {
    return "B";
  }

  if (number === 2) {
    return "C";
  }
}

console.log(convertNumber(0));
console.log(convertNumber(1));
console.log(convertNumber(2));


function evatuateresult(firstNumber,secondNumber) {
if (firstNumber === secondNumber) {
  return "Numbers are equal!";
}
else if (firstNumber>secondNumber){
  return "First numbers is greater than second number!";
  }
else if (secondNumber<firstNumber){
return "Second number is greater than first number!";}
}
}
console.log(evatuateresult(1234,2345));
