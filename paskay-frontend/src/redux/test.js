import * as ActionTypes from './ActionTypes';

export const test = (state = { 
	  testState: true,
    testState2: "not Logged",
    },
    action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TEST:
            return {...state, testState: !state.testState}

        case ActionTypes.CHANGE_TEST_2:
            return {...state, testState2: action.payload}
                                                                                                                    
        default:
            return state;
    }
};
