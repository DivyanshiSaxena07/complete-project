// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }
// const vowels=str=>{
//     let count=0;
//     const v=['a','e','i','o','u'];
//     for(let char of str.toLowerCase()){
//         if(v.includes(char))
//         count++;

//     }
//     return count
// }
var firstWord = "Deepak";
var secondWord = "Aman";

console.log(isAnagram("Deepak", "Deepak")); // true

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
