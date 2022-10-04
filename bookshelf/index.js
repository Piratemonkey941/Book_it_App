// let name = "Amy";

// function updateNames(name) {
//   let sentence = `Hello, my name is ${name}. My friend's name is also ${name}.`;

//   return sentence
// }

// console.log(updateNames(name))

//=================================================

(function(){

  let names = "Amy2"

  function updateNames(names){

    let sentence = "Hello, my name is John. My friend's name is also John.";

    return  sentence.replaceAll(/John/g, names)


    }

  const n = updateNames(names);

  console.log(n)

})()


// Exercise 2 ================================================================


// let sentence = "My name is John!";

// function reverse(str) {
//     if (str === "")
//        return "";

//        else
//            return reverse(str.substr(1)) + str.charAt(0)
//    }

//    reverse(sentence);

//    console.log(reverse(sentence))





//method 1 =========================================

// function reverse(str) {
//   var splitString = str.split("");

//   var reverseArray = splitString.reverse();

//   var joinArray = reverseArray.join("");

//   return joinArray;
// }

//method 2 =========================================

let sentence = "My name is John!";

function reverse(str) {
let newString = ""

for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString;
}

reverse(sentence);

console.log(reverse(sentence))

