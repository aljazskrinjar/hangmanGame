import { ADDING_LETTER } from '../actions/addLetter'


const unknown = "hello"


function wrongGuessCount(word, guesses) {
  var numOfGuesses = 0
  for (var i = 0; i < guesses.length; i++) {
    if (word.indexOf(guesses[i]) === -1) numOfGuesses++;
  }
  return numOfGuesses;
}

function showGuess(word, guesses) {

  var arr = []

  for (var i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      arr.push(word[i])
    } else {
      arr.push("_")
    }
  }

  return arr.join(" ")

}


function isWinner(word, guesses) {
  if (word === showGuess(word, guesses).split(" ").join("")) {
    return true
  }
  else return false

}


function next(word, guesses) {

  if (wrongGuessCount(word, guesses) > 5) {

    return -1;
  } else if (isWinner(word, guesses)) {
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


export default function (state = initialState, { type, payload } = {}) {

  switch (type) {
    case ADDING_LETTER:

      const updatedGuesses = [payload, ...state.guesses]
      console.log(updatedGuesses)
      const updatedwinLosePlay = next(unknown, updatedGuesses)
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
