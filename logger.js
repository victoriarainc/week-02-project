//
// !! Don't Edit this file
// ..........edit :P
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

let section = document.querySelector('section');

function runAnswer (num, question) {
  const color = 'background: #ff4e29; color: #FFFFFF';
  console.log(`%c -- Question ${num} -- `, color);
  let answer = question();

  // DOM maniuplation here
  // answer may be string OR and object

section.innerHTML += `<article>${answer}</article>`

}

runAnswer(1, question1);
runAnswer(2, question2);
runAnswer(3, question3);
runAnswer(4, question4);
runAnswer(5, question5);
runAnswer(6, question6);
