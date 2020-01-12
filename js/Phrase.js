/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

    constructor(phrase) {

        this.phrase = phrase.toLowerCase();

    }
    addPhraseToDisplay() {

        const phraseUl = document.querySelector('ul');
        let displayPhrase = this.phrase;
        const regex = /[a-z]/i;


        for (let i = 0; i < displayPhrase.length; i++) {

            if (displayPhrase[i].match(regex)) {
                let li = document.createElement('li');
                li.classList.add('hide', 'letter');
                li.innerText = displayPhrase[i];
                phraseUl.appendChild(li);


            } else if (displayPhrase[i].match(' ')) {
                let li = document.createElement('li');
                li.classList.add('space');
                li.innerText = displayPhrase[i];
                phraseUl.appendChild(li);


            }


        }


    }
    checkLetter(letter) {

        return this.phrase.includes(letter); //returns true is letter is included in phrase, false if not included

    }


    showMatchedLetter(letter) {

        let letterMatch = document.getElementsByClassName('letter');
        for (let i = 0; i < letterMatch.length; i++) {

            if (letterMatch[i].innerHTML === letter) {


                letterMatch[i].classList.remove('hide', 'letter');
                letterMatch[i].classList.add('show', 'letter');



            }

        }
        return letterMatch;
    }
};