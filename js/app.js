/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//const phrase = new Phrase();

 //console.log(`Phrase - phrase: ${phrase.phrase}`);
// game.phrases.forEach((phrase, index) =>{




    
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);

//});
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
//  };
//   const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);

//const phrase3 = new Phrase('Dang');
// const phrase2 = new Phrase();
//console.log(phrase3)
// phrase.addPhraseToDisplay();

//  logPhrase(game.getRandomPhrase());

//  game = new Game();
//  game.startGame();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game =new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase (randomPhrase.phrase);



// const game = new Game();
// game.startGame();

// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game; 
const button = document.getElementById('btn__reset');


button.addEventListener('click', () => { //eventlistener activates new game when start button is clicked

game = new Game ();
game.startGame();


})


