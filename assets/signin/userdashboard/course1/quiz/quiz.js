let currentQuestion = document.querySelector('.question');
let choice1 = document.querySelector('#choice1-text');
let choice2 = document.querySelector('#choice2-text');
let choice3 = document.querySelector('#choice3-text');
let choice4 = document.querySelector('#choice4-text');

let result = document.querySelector('.result');
let button = document.querySelector('.submit');

let questionNum = 1;

const questions = {
  1: "What is the definition of confirmation bias?",
  2: "What is the idea of the section Understanding Confirmation Bias?",
  3: "What is a summary of the section Confronting Confirmation Bias?",
};

const choices = { 
  1: ['What someone has when they are right about a particular topic or fact', 'The idea that people pay more attention to information that agrees with their own beliefs', 'People changing/altering facts to make an argument', "Deceiving others by confirming incorrect information"],
  2: ['Type of cognitive bias that involves favoring information that confirms your previously existing beliefs or biases.', 'It impacts how we gather information, but also influence how we interpret&recall information.', "It might even seek proof that further backs up this belief while discounting examples that don't support the idea.", 'They will also remember details in a way that reinforces these attitudes.'],
  3: ["It is impossible to really deal with this problem because of the way people's brains function.", 'Everyone has a responsibility to argue with those who they believe are wrong.', 'People question their own thoughts and sources to evaluate how they perceive information.', 'Confirmation bias is an inherently confrontational and aggressive idea.'],
};

currentQuestion.textContent = questions[questionNum];
choice1.textContent = choices[questionNum][0];
choice2.textContent = choices[questionNum][1];
choice3.textContent = choices[questionNum][2];
choice4.textContent = choices[questionNum][3];




const checkChoice = () => {
    if (questionNum == 1) {
      if (document.querySelector('#choice2').checked && !document.querySelector('#choice3').checked && !document.querySelector('#choice4').checked && !document.querySelector('#choice1').checked) {
        result.textContent = "Correct answer!";
        result.style.color = 'green';
      } else {
        result.textContent = "Wrong answer!";
        result.style.color = 'red';
      };
    };
  if (questionNum == 2) {
    if (document.querySelector('#choice1').checked && !document.querySelector('#choice3').checked && !document.querySelector('#choice2').checked && !document.querySelector('#choice4').checked) {
        result.textContent = "Correct answer!";
        result.style.color = 'green';
      } else {
        result.textContent = "Wrong answer!";
        result.style.color = 'red';
      };
  };
  if (questionNum == 3) {
    if (document.querySelector('#choice3').checked && !document.querySelector('#choice4').checked && !document.querySelector('#choice2').checked && !document.querySelector('#choice1').checked) {
        result.textContent = "Correct answer!";
        result.style.color = 'green';
        
      } else {
        result.textContent = "Wrong answer!";
        result.style.color = 'red';
      };
  };
  button.setAttribute('value', 'Next question');
  button.setAttribute('onclick', 'nextQuestion()');
  button.style.width = '200px';
};

const nextQuestion = () => {
  console.log('next');
  questionNum+=1;
  if (questionNum < 4) {
    console.log(questionNum);
    currentQuestion.textContent = questions[questionNum];
    choice1.textContent = choices[questionNum][0];
    choice2.textContent = choices[questionNum][1];
    choice3.textContent = choices[questionNum][2];
    choice4.textContent = choices[questionNum][3];

  };
  button.setAttribute('value', 'Verify');
  button.setAttribute('onclick', 'checkChoice()');
  button.style.width = '130px';
  result.textContent = "";
  document.querySelector('#choice1').checked = false;
  document.querySelector('#choice2').checked = false;
  document.querySelector('#choice3').checked = false;
  document.querySelector('#choice4').checked = false;
};