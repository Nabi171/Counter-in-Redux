//select dom elements
const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");

//action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
}



// initial state 
const initialState = {
    value: 0,
};

//action identifier
const INCREMENT = "increment";
const DECREMENT = 'decrement'

//create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else {
        return state;
    }
}

//crete store
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    counterEL.innerText = state.value.toString();
};

//update uI initiallly
render();

store.subscribe(render);


//button click listerners
incrementEL.addEventListener('click', () => {
    store.dispatch(increment(5));
});

decrementEL.addEventListener('click', () => {
    store.dispatch(decrement(2));
});
