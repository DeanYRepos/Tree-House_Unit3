/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases(); //method passed into phrases property

        this.activePhrase =null;

    }
    /*Method that creates array of phrases */

    createPhrases() {

        let phraseArray = [{ //array of phrase objects
                phrase: 'The finger thing means the taxes'

            }, {
                phrase: 'I think therefore I am'

            }, {
                phrase: 'I find your lack of faith disturbing'

            }, {
                phrase: 'I knew it was wrong I did it anyway'

            }, {
                phrase: 'Dont forget to bring a towel '

            }




        ];



        return phraseArray;
    };
/*Method that randomizes phrases chossen */


getRandomPhrase(){ 

    let randomNumber = Math.floor(Math.random () * this.createPhrases().length) ; 

    return this.createPhrases()[randomNumber];

}

startGame(){


let overlay = document.getElementById('overlay');
overlay.style.visibility = 'hidden';
let phrase = new Phrase(this.getRandomPhrase);
this.activePhrase = this.getRandomPhrase;
this.activePhrase.addPhraseToDisplay();










}

};  