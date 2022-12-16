var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var main = document.getElementById("main");
var indexNum = 0;
var marks = 0;


var questions = [
    {
      numb: 1,
      question: "What does HTML stands for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stands for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
      {
      numb: 6,
      question: "JavaScript is a/an ______ Language?",
      answer: "Object Oriented",
      options: [
        "Object Oriented",
        "Object Based",
        "Procedual",
        "None of the Above"
      ]
    },
      {
      numb: 7,
      question: "Which of the following is a client site language?",
      answer: "JavaScript",
      options: [
        "Java",
        "C",
        "Python",
        "JavaScript"
      ]
    },
      {
      numb: 8,
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: [
        "1996",
        "1995",
        "1994",
        "None of the Above"
      ]
    },
      {
      numb: 9,
      question: "Which language runs in a web browser?",
      answer: "JavaScript",
      options: [
        "C++",
        "Python",
        "JavaScript",
        "Java"
      ]
    },
      {
      numb: 10,
      question: "What does OOP stands for?",
      answer: "Object Oriented Programming",
      options: [
        "Object Oriented Programming",
        "Object Open Programming",
        "Oriented Object Programming",
        "None of the Above"
      ]
    },
      {
      numb: 11,
      question: "Which one is a JavaScript Framework?",
      answer: "React",
      options: [
        "Django",
        "React",
        "Flask",
        "Laravel"
      ]
    },
      {
      numb: 12,
      question: "Which one is a Backend Language?",
      answer: "PHP",
      options: [
        "PHP",
        "HTML",
        "React",
        "C++"
      ]
    },
      {
      numb: 13,
      question: "Which Language is best for Artificial intelligence?",
      answer: "Python",
      options: [
        "React",
        "Laravel",
        "Python",
        "Sass"
      ]
    },
      {
      numb: 14,
      question: "What does MERN stands for?",
      answer: "Mongo Express React Node",
      options: [
        "Mongo Express React Node",
        "Mongo ESPOL Ruby NPL",
        "Mercury ECMAScript6 Rust NewtonScript",
        "None of the Above"
      ]
    },
      {
      numb: 15,
      question: "Which programming language is best for blockchain??",
      answer: "Solidity",
      options: [
        "Solidity",
        "Dart",
        "Sass",
        "R++"
      ]
    },
  ];
  
  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
      ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
    }
  }
  showQuestion();
  
  function skipQuestion() {
    indexNum++;
    showQuestion();
  }
  
  function checkAns(a, b) {
    if (a == b) {
      marks++;
    }
    if(indexNum + 1 == questions.length) {
      alert("Your Marks is: " + marks)
      // main.innerHTML = `YOUR MARKS is: ${marks}`
    }else{
      skipQuestion();

    }
  } 