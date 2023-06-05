import { Action } from "@ngrx/store";
import { CounterAction, DECREMENT, DecrementAction, INCREMENT, IncrementAction } from "./counter.action";


const intialState = 0;

// export const counterReducer = createReducer(
//     intialState,
//     on(increment, (state, action) => state + action.value)
//     on(decrement, (state, action) => state - action.value)
// );

export function counterReducer(state = intialState, action: CounterAction | Action) {
    if (action.type === INCREMENT) {
        return state + (action as IncrementAction).payload;
    }else if(action.type === DECREMENT){
        return state - (action as DecrementAction).payload;
    }
    return state;
};

