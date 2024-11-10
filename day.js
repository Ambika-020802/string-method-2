1.
//  let str = "Hello World!";
// Relace the substring “World!” with “My Dear Friend” ..
// Write the program for that


let str ="Hello World!";
let str2= str.replace("World!","My Dear Friend");
console.log(str2);



// 2.
// let a=”Hungry”;
// Repeat the “Hungry” for 10 times
// Write the program for that

let a="Hungry \n"
let b=a.repeat(10)
console.log(b);



// 3.
// let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
// Find the last index of the string “fox”


let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
let index= sentence.lastIndexOf("fox");
console.log(index);


// 4.let message = "Hello, world!";
// Find the string starts with “hi”
// Write code for that


let message = "Hello, world!";
let msg=message.startsWith("hi");
console.log(msg);



// 5.let fileName = "document.pdf";
// Find the string ends with “.pdf”
// Write code for that

let fileName = "document.pdf";
let names=fileName.endsWith(".pdf");
console.log(names);
