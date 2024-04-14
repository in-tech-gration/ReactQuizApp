const js_questions = [
  {
    question: `What does DOM stand for in JavaScript?`,
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Order Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: `Which method is used to add a new element to the end of an array?`,
    answers: ["push()", "append()", "addToEnd()", "insertEnd()"],
    correctAnswer: "push()",
  },
  {
    question: `What is the correct syntax for referring to an external script called "script.js"?`,
    answers: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script link='script.js'>",
      "<script ref='script.js'>",
    ],
    correctAnswer: "<script src='script.js'>",
  },
  {
    question: `How do you declare a JavaScript variable?`,
    answers: [
      "var carName;",
      "v carName;",
      "variable carName;",
      "variable carName;",
    ],
    correctAnswer: "var carName;",
  },
  {
    question: `Inside which HTML element do we put the JavaScript code?`,
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: "<script>",
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    answers: [
      "alert('Hello World');",
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
    ],
    correctAnswer: "alert('Hello World');",
  },
  {
    question: `How do you create a function in JavaScript?`,
    answers: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "function - myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    question: `How do you call a function named "myFunction"?`,
    answers: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "run myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    question: `How do you write an IF statement in JavaScript?`,
    answers: ["if (i == 5)", "if i == 5 then", "if i = 5 then", "if i = 5"],
    correctAnswer: "if (i == 5)",
  },
  {
    question: `How does a WHILE loop start?`,
    answers: [
      "while (i <= 10)",
      "while (i <= 10; i++)",
      "while i = 1 to 10",
      "while i <= 10",
    ],
    correctAnswer: "while (i <= 10)",
  },
  {
    question: `How can you add a comment in JavaScript?`,
    answers: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "' This is a comment",
      "/* This is a comment */",
    ],
    correctAnswer: "// This is a comment",
  },
  {
    question: `Which operator is used to assign a value to a variable?`,
    answers: ["=", "-", "*", ":"],
    correctAnswer: "=",
  },
  {
    question: `What will the following code output: console.log(typeof [1, 2, 3]);`,
    answers: ["array", "object", "number", "list"],
    correctAnswer: "object",
  },
  {
    question: `What will the following code output: console.log(2 + '2');`,
    answers: ["4", "22", "TypeError", "undefined"],
    correctAnswer: "22",
  },
  {
    question: `How do you round the number 7.25, to the nearest integer?`,
    answers: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
    correctAnswer: "Math.round(7.25)",
  },
  {
    question: `What does the following code return: Boolean('false');`,
    answers: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
  },
  {
    question: `How do you find the number with the highest value of x and y?`,
    answers: ["Math.max(x, y)", "top(x, y)", "ceil(x, y)", "max(x, y)"],
    correctAnswer: "Math.max(x, y)",
  },
  {
    question: `What is the correct JavaScript syntax for opening a new window called "myWindow"?`,
    answers: [
      "myWindow = window.open('url', '_blank')",
      "myWindow = open('url', '_blank')",
      "window.myWindow('url', '_blank')",
      "open.window('url', '_blank')",
    ],
    correctAnswer: "myWindow = window.open('url', '_blank')",
  },
  {
    question: `Which event occurs when the user clicks on an HTML element?`,
    answers: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    correctAnswer: "onclick",
  },
  {
    question: `Which operator is used to compare two values, but without checking the type?`,
    answers: ["==", "===", "!=", "<>"],
    correctAnswer: "==",
  },
];

export default js_questions;
