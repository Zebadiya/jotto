export  const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUEST',
};

export function correctGuess() {
    return {type: actionTypes.CORRECT_GUESS};
}