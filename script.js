let questions = [
    {
    numb: 1,
    question: "What is an array in Javascript?",
    answer: "Arrays are a special variable, which can hold more than one value",
    options: [
      "a block of code designed to perform a paticular task",
      "Arrays store and manipulate text",
      "Arrays are a special variable, which can hold more than one value",
      "Arrays are a variable that cannot be reassigned"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  

     {
     numb: 6,
     question: "Your Question is Here",
  
     options: [
       "Option 1",
       "option 2",
       "option 3",
       "option 4"
    ]
   },
];




// when you click start
var start_btn=document.querySelector(".start_btn")
var div_start=document.querySelector(".startpage")
var timerEl=document.querySelector(".timer_sec")
var questionEL=document.querySelector(".Questions_text")
var button_1=document.querySelector(".ans-1")
var button_2=document.querySelector(".ans-2")
var button_3=document.querySelector(".ans-3")
var button_4=document.querySelector(".ans-4")
var question_index = 0
start_btn.addEventListener("click",()=>{
//   info_box.classList.add("activeInfo"); 
    div_start.style="display:none;"
    countdown()
    next_question()
    

})

//exit_btn.onclick = ()=>{
    //info_box.classList.remove("activeInfo"); 
//}

button_1.addEventListener("click", QuestionIndexCounter)
button_2.addEventListener("click", QuestionIndexCounter)
button_3.addEventListener("click", QuestionIndexCounter)
button_4.addEventListener("click", QuestionIndexCounter)

function next_question (){
questionEL.textContent=questions[question_index].question
button_1.innerHTML=questions[question_index].options[0]
button_2.innerHTML=questions[question_index].options[1]
button_3.innerHTML=questions[question_index].options[2]
button_4.innerHTML=questions[question_index].options[3]
}

function QuestionIndexCounter(){
  question_index++
  next_question()
}






// Timer that counts down from 5
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}