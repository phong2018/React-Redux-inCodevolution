const redux = require('redux')
const reduxLogger = require('redux-logger')
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info: 'buyIceCream redux action'
    }
}

// (previousState, action)=>newState

const initalCakeState = {
    numberOfCakes: 10,
}

const initalIceCreamState = {
    numberOfIceCream: 20
}

const cakeReducer = (state = initalCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ... state,
            numberOfCakes: state.numberOfCakes - 1
        } 
        default: return state
    }
}

const iceCreamReducer = (state = initalIceCreamState, action) => {
    switch (action.type) { 
        case BUY_ICECREAM: return {
            ... state,
            numberOfIceCream: state.numberOfIceCream-1
        }

        default: return state
    }
}

const rootReducer=combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Init State', store.getState())

const unSubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unSubscribe();