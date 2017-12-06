import {ADDING_LETTER} from '../actions/addLetter'


const unknown = "hello"


function wrongGuessCount(word, guesses) {
  var numOfGuesses=0
  for(var i=0; i < guesses.length; i++){
    if (word.indexOf(guesses[i]) === -1) numOfGuesses++;
  }
  return numOfGuesses;
}

// console.log("test wrong guesses: ",
//   wrongGuessCount("hello", ["e", "d", "x", "o"]) === 2)

function showGuess(word,guesses) {
  // Hint: String.split("") will turn word into a list of letters.
  // Hint: String.join(separator) will glue a list of strings into a single string.

  var arr = []

  for(var i=0; i < word.length;i++){
    if(guesses.includes(word[i])){
      arr.push(word[i])
    } else {
      arr.push("_")
    }
  }

  return arr.join(" ")

}

//
// console.log("test show guess 1:", showGuess("hello", ["l"]) === "_ _ l l _")
// console.log("test show guess 2:", showGuess("hello", ["l", "a", "e"]) === "_ e l l _")

function isWinner(word, guesses) {
  // console.log(word)
  //
  // console.log(showGuess(word,guesses).split(" ").join(""))
  if ( word === showGuess(word,guesses).split(" ").join("")){
    return true
  }
  else return false

}


function next(word, guesses) {

    if (wrongGuessCount(word, guesses) > 5){

      return -1;
    }else if (isWinner(word, guesses)){
      return 1;

    }
    else {
      return 0;
    }

}

const initialState = {
  winLosePlay: 0,
  word: "",
  guesses: [],

}


export default function (state = initialState , { type, payload } = {}) {

	switch (type) {
    case ADDING_LETTER:

      const updatedGuesses = [payload, ...state.guesses]
      const updatedwinLosePlay = next(unknown,updatedGuesses)
      const updatedWord = showGuess(unknown, updatedGuesses)


      return {
        ...state,

        winLosePlay: updatedwinLosePlay,
        word: updatedWord,
        guesses: updatedGuesses
      }



    default:
      return state

	}
}
