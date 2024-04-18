// homework 1
let length = 10;
let width = 5;

let result = (length * width) / 2;

console.log(result);

// homework 2
let num1 = 10;
let num2 = 5;

let additionresult = num1 + num2;
let substractionResult = num1 - num2;
let multiplyResult = num1 * num2;
let divideResult = num1 / num2;

console.log(
  "addition result:" + additionresult,
  "substraction Result:" + substractionResult,
  "multiplyResult:" + multiplyResult,
  "divideResult:" + divideResult
);

let data1 = "LEVEL";
let data2 = "ANNA";
let data3 = "ALLO";

function checkForPalindrome(data) {
  data = data.toLowerCase();
  for (let i = 0; i < data.length / 2; i++) {
    if (data[i] !== data[data.length - 1 - i]) {
      console.log(data, "is not palindrome");
      return false;
    } else {
      console.log(data, "is  palindrome");
      return true;
    }
  }
}

checkForPalindrome(data1);
checkForPalindrome(data2);
checkForPalindrome(data3);
