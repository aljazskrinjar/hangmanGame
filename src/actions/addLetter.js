export const ADDING_LETTER = 'ADDING_LETTER'

export default (letter) => {
  return {
    type: ADDING_LETTER,
    payload: letter,
    
  }
}
