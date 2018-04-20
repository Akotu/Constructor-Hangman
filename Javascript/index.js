var prompt = require("prompt");
var Word = require("./word.js");

console.log("----------------------------------");
console.log("Hangman");
console.log("The topic is car brands!");
console.log("You have 10 guesses for each word");
console.log("----------------------------------");

prompt.start();

game = {
    wordBank: ['Ford', 'Chevy', 'Acura', 'Honda', 'Lexus', 'Mazda', 'Volkswagen'],
    win: 0,
    guessesLeft: 10,
    currentWord: null,

    start: function(wrd){
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
        this.currentWord.guesses();
        this.promptUser();
    },

    resetGuesses: function(){
        this.guessesLeft = 10;
    },

    promptUser: function(){
        var you = this;
        prompt.get(['guessLetter']), function (err, res){
            console.log("Guessed: "+ result.guessLetter);
            var manyGuessed = you.currentWord.checkLetter(result.guessLetter);


        }
    }
}

game.start();
