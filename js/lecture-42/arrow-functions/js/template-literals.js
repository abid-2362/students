/*
  Template literals
*/

let name = "Abid";
let profession = "Teacher";
let organization = "Saylani Welfare";
const getSkills = () => {
  return "HTML, CSS, Javascript, React, Node";
}

// Concatenation made easy with template literals

let intro = `Hello, my name is ${name}, I am a ${profession} at ${organization} and
    my skill set is ${getSkills()}`;

console.log(intro);