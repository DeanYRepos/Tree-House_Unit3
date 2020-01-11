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
                li.className = 'hide letter' + displayPhrase[i] ;
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

};