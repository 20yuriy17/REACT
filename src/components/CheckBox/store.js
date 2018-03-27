import { createStore } from 'redux';

const ACTIONS = {
    "ADD_NEW_EX": "ADD_NEW_EX",
    'TOGGLE_EX': 'TOGGLE_EX',
    'DELETE_EX': 'DELETE_EX'
};


const initialState = {
    exercises: [{
        exersiceName: "TTTTTT",
        id: "12",
        checkbox: false,
    }]
};

const store = createStore((state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.ADD_NEW_EX: {
            return {
                exercises:[...state.exercises, {
                    exersiceName: action.exersiceName,
                    id: action.id,
                    checkbox: action.checkbox
                }]
            }

        }

        case ACTIONS.TOGGLE_EX : {

        }

        case ACTIONS.DELETE_EX: {
            // debugger
            return {
                exercises: [...state.exercises.filter(exercises => action.id !== exercises.id)]
            }

        }

        default:
            return state;
    }
});

export default store;