var letter = require("./letter.js");


function Word(word) {
    this.word = word;
    this.letters = [];
    this.guessed = false;

    this.guesses = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new letter(this.word[i]));
        }
    };

    this.locateWord = function () {
        this.guessed.every(function (cLetter) {
            return cLetter.appear;
        });
        return this.guessed;
    };

    this.checkLet = function (guessLet) {
        var num = 0;

        for (var i = 0; i < this.lets.length; i++) {
            if (this.letters[i].word == guessLet) {
                this.letters[i].appear = true;
                num++;
            }

        }
        return num;
    };


    this.render = function () {
        var string = '';
        for (var i = 0; i < this.lettters.length; i++) {
            string += this.lets[i].render();
        }
        return string;
    };




}

module.exports = Word;