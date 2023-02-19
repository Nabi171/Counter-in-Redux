//select dom elements
const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");


// initial state 
const initialState = {
    value: 0,
};

//create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
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
    store.dispatch({
        type: 'increment',
    });
});

decrementEL.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    });
});
