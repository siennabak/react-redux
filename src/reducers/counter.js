import * as types from '../actions/ActionTypes';

const intialState = {
    number: 0,
    dummy: 'dummm'
};

export default function counter( state = intialState , action ) {
   switch(action.type) {
        
        case types.INCREMENT:
           
            return { ...state, number: state.number + 1 };
        
        case types.DECREMENT: 
            return {
                ...state, number: state.number - 1
            };

        default:
            return state; 
   }
}