import {actionTypes} from "../../action";
import successReducer from "../../reducers/successReducer";

test('return default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});
test('returns state of true upon receiving of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});
