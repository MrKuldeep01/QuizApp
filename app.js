const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What is the basic building block of JavaScript?",
    a: "Variable",
    b: "Function",
    c: "Object",
    d: "Array",
    correct: "a",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    a: "let",
    b: "variable",
    c: "var",
    d: "int",
    correct: "a",
  },
  {
    question: "Which operator is used for concatenating strings in JavaScript?",
    a: "+",
    b: "&",
    c: "|",
    d: "-",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'document' object in JavaScript?",
    a: "Manipulating HTML documents",
    b: "Handling events",
    c: "Performing mathematical operations",
    d: "Styling elements",
    correct: "a",
  },
  {
    question: "What does the 'typeof' operator return in JavaScript?",
    a: "Data type",
    b: "Object",
    c: "Undefined",
    d: "Boolean",
    correct: "a",
  },
  {
    question: "How can you comment out a single line in JavaScript?",
    a: "//",
    b: "/* */",
    c: "--",
    d: "'''",
    correct: "a",
  },
  {
    question: "What is the purpose of 'addEventListener' in JavaScript?",
    a: "Creating variables",
    b: "Handling events",
    c: "Defining functions",
    d: "Manipulating arrays",
    correct: "b",
  },
  {
    question:
      "Which keyword is used to prevent the execution of a loop in JavaScript?",
    a: "break",
    b: "stop",
    c: "exit",
    d: "terminate",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    a: "Referring to the current object",
    b: "Declaring a variable",
    c: "Creating a function",
    d: "Manipulating arrays",
    correct: "a",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    a: "pop()",
    b: "removeLast()",
    c: "deleteLast()",
    d: "splice()",
    correct: "a",
  },

  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question:
      "What is the purpose of the 'querySelector' method in JavaScript?",
    a: "Styling elements",
    b: "Selecting HTML elements",
    c: "Creating variables",
    d: "Manipulating arrays",
    correct: "b",
  },
  {
    question:
      "Which method is used to convert a string to lowercase in JavaScript?",
    a: "toLowerCase()",
    b: "toLower()",
    c: "convertToLower()",
    d: "lowercase()",
    correct: "a",
  },
  {
    question:
      "What is the purpose of the 'JSON.stringify' method in JavaScript?",
    a: "Parsing JSON data",
    b: "Converting an object to a JSON string",
    c: "Creating a new object",
    d: "Removing an element from an array",
    correct: "b",
  },
  {
    question: "In JavaScript, what does the 'NaN' value represent?",
    a: "Not a Number",
    b: "Null",
    c: "Negative",
    d: "No Action Needed",
    correct: "a",
  },
  {
    question:
      "Which loop is used for iterating over the properties of an object in JavaScript?",
    a: "for loop",
    b: "while loop",
    c: "do-while loop",
    d: "for...in loop",
    correct: "d",
  },

  {
    question: "What does the 'async' keyword do in JavaScript?",
    a: "Defines a function as asynchronous",
    b: "Adds comments to the code",
    c: "Creates a callback function",
    d: "Stops code execution",
    correct: "a",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    a: "push()",
    b: "append()",
    c: "addToEnd()",
    d: "addElement()",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    a: "Declares a constant",
    b: "Declares a variable with block scope",
    c: "Defines a function",
    d: "Imports a module",
    correct: "b",
  },
  {
    question: "How can you prevent a form from submitting in JavaScript?",
    a: "event.stopPropagation()",
    b: "event.preventDefault()",
    c: "form.stopSubmission()",
    d: "form.preventSubmit()",
    correct: "b",
  },
  {
    question:
      "Which method is used to schedule a function to run after a certain delay in JavaScript?",
    a: "setInterval()",
    b: "setDelay()",
    c: "setTimeout()",
    d: "delayFunction()",
    correct: "c",
  },

  {
    question: "What is the purpose of the 'map' method in JavaScript?",
    a: "Iterates over an array and modifies each element",
    b: "Finds the maximum value in an array",
    c: "Sorts the elements of an array",
    d: "Concatenates two arrays",
    correct: "a",
  },
  {
    question: "In JavaScript, what is a closure?",
    a: "A function that has access to variables from its outer scope",
    b: "A method to close the browser window",
    c: "A built-in JavaScript object",
    d: "An event handler for closing pop-up windows",
    correct: "a",
  },
  {
    question:
      "Which statement is used to exit a switch statement in JavaScript?",
    a: "break",
    b: "exit",
    c: "end",
    d: "stop",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'fetch' function in JavaScript?",
    a: "To fetch HTML files",
    b: "To fetch data from a server",
    c: "To fetch CSS styles",
    d: "To fetch images",
    correct: "b",
  },
  {
    question: "How can you check if a variable is an array in JavaScript?",
    a: "typeof variable === 'array'",
    b: "Array.isArray(variable)",
    c: "variable.isArray()",
    d: "variable.typeOf('array')",
    correct: "b",
  },

  // Add more questions as needed...

  // 41-50
  {
    question: "What is the purpose of the 'splice' method in JavaScript?",
    a: "To remove elements from an array",
    b: "To add elements to an array",
    c: "To concatenate two arrays",
    d: "To reverse the order of an array",
    correct: "a",
  },
  {
    question:
      "Which event is triggered when the user clicks on an HTML element?",
    a: "onhover",
    b: "onmouseclick",
    c: "onclick",
    d: "onactivate",
    correct: "c",
  },
  {
    question: "What is the purpose of the 'toUpperCase' method in JavaScript?",
    a: "Converts a string to uppercase",
    b: "Checks if a string is in uppercase",
    c: "Adds a string to an uppercase array",
    d: "Removes uppercase characters from a string",
    correct: "a",
  },
  {
    question:
      "What is the purpose of the 'arguments' object in a JavaScript function?",
    a: "Contains information about the function's arguments",
    b: "Defines the function's parameters",
    c: "Prevents the function from being called",
    d: "Returns the function's result",
    correct: "a",
  },
  {
    question:
      "Which method is used to convert a string to a number in JavaScript?",
    a: "parseInt()",
    b: "toNumber()",
    c: "convertToNumber()",
    d: "numberize()",
    correct: "a",
  },

  {
    question: "In JavaScript, what does the 'NaN' value represent?",
    a: "Not a Number",
    b: "Null",
    c: "Negative",
    d: "No Action Needed",
    correct: "a",
  },
  {
    question:
      "Which loop is used for iterating over the properties of an object in JavaScript?",
    a: "for loop",
    b: "while loop",
    c: "do-while loop",
    d: "for...in loop",
    correct: "d",
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    a: "Defines a function as asynchronous",
    b: "Adds comments to the code",
    c: "Creates a callback function",
    d: "Stops code execution",
    correct: "a",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    a: "push()",
    b: "append()",
    c: "addToEnd()",
    d: "addElement()",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    a: "Declares a constant",
    b: "Declares a variable with block scope",
    c: "Defines a function",
    d: "Imports a module",
    correct: "b",
  },
];

let app = document.querySelector(".app");
let question = document.querySelector(".questionhead");
let options = document.querySelectorAll(".options");
let aText = document.querySelector(".aText");
let bText = document.querySelector(".bText");
let cText = document.querySelector(".cText");
let dText = document.querySelector(".dText");
let submitBtn = document.querySelector(".submitBtn");
let currentQ = 0;
let score = 0;
let stopBtn = document.querySelector(".stop");
loadGame();
function loadGame() {
  deselectFun();
  let currentQData = quizData[currentQ];
  question.innerText = currentQData.question;
  aText.innerText = currentQData.a;
  bText.innerText = currentQData.b;
  cText.innerText = currentQData.c;
  dText.innerText = currentQData.d;
}
function deselectFun() {
  options.forEach((i) => {
    i.checked = false;
  });
}
function selectFun() {
  let answer;
  options.forEach((ch) => {
    if (ch.checked) {
      answer = ch.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  let answer = selectFun();
  if (answer) {
    if (answer === quizData[currentQ].correct) {
      score++;
    }
    currentQ = currentQ + 1;
    if (currentQ < quizData.length) {
      loadGame();
    } else {
      app.innerHTML = `
                    <p>time out Kidd! </p>
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button class='reloadBtn' onclick="location.reload()">Reload</button>
            `;
    }
  }
});
stopBtn.addEventListener("click", () => {
  deselectFun();
  let flag = confirm("exit now ?");
  if (flag) {
    app.innerHTML = `
    <div class='finish'>
                    <p>Okay Quiz stoped !</p>
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button class='reloadBtn' onclick="location.reload()">Reload</button>
                </div>
            `;
            currentQ=0;
            score=0;
  }
});
