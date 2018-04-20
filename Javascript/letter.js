function Letter(letter){
    this.letter = letter
    this.appear = false
    this.letterRender = function(){
        return !(this.appear) ? "_" : this.letter;
    }
};



module.exports = Letter;



