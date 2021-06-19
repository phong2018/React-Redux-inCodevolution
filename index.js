const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info: 'Firs redux action'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info: 'buyIceCream redux action'
    }
}

// (previousState, action)=>newState

const initalState = {
    numberOfCakes: 10,
    numberOfIceCream: 20
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ... state,
            numberOfCakes: state.numberOfCakes - 1
        }

        case BUY_ICECREAM: return {
            ... state,
            numberOfIceCream: state.numberOfIceCream-1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Init State', store.getState())

const unSubscribe = store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unSubscribe();