const chalk = require ('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.green.bold("Hey! Let's see how well you know Ayushi;)"));
console.log("Are you ready? Let's go :D");
console.log(chalk.green(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));

var score = 0;
function play(question, answer){
  var userAns = readlineSync.question(question);
if(userAns === answer){
  console.log(chalk.green("right :)"));
  score++;
}
else{
  console.log(chalk.red("wrong :("));
}
console.log("--------------------------");
}
var question1 = {
    question: "Ayushi's favourite colour?\n A. Yellow\n B. Red\n C. Blue\n D. Black ",
    answer: "Yellow",
  }
  var question2 = {
    question: "Ayushi would like to go for movie or longdrive? ",
    answer: "Longdrive",
  }
  var question3 = {
    question: "She is introvert or extrovert or ambivert? ",
    answer: "Ambivert",
  }
  var question4 = {
    question: "She is biliophile or astrophile? ",
    answer: "Bibliophile",
  }
  var question5 = {
    question: "what will she prefer chocolate or icecream? ",
    answer: "Icecream",
  }
  var array = [question1, question2, question3, question4, question5];
  for(var i=0; i<array.length; i++){
    var currentQues = array[i];
  play(currentQues.question , currentQues.answer);
  }
  console.log("your score: " + score + "/5");