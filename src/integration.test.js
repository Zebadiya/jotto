import {storeFactory} from '../test/testUtils';
import {guessedWord} from './action/index';

describe('guessedWord action dispatcher', () => {
    const secretWords = 'party';
    const unsuccessfulGuess = 'train';
    describe('no guessed words', () => {
        let store;
        const initialState = {secretWords};
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('update state correctly for unsuccessful guess', () => {
            store.dispatch(guessedWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            }

            expect(newState).toEqual(expectedState);
        });
        test('update state correctly for successful guess', () => {
            store.dispatch(guessedWord(secretWords));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWords,
                    letterMatchCount: 5,
                }],
            }
            expect(newState).toEqual(expectedState);
        });
    })
    describe('some guessed words', () => {
        let store;
        const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1}];
        const initialState = {guessedWords, secretWords};
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('update state correctly for unsuccessful guess', () => {
            store.dispatch(guessedWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWords,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            }
            expect(newState).toEqual(expectedState);
        });
        test('update state correctly for successful guess', () => {
            store.dispatch(guessedWord(secretWords));
            const newState = store.getState();
            const expectedState = {
                secretWords,
                success: true,
                guessedWords: [...guessedWords, {guessedWord: secretWords, letterMatchCount: 5}]
            };
            expect(newState).toEqual(expectedState);
        });
    })
});
