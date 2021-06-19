const BUY_CAKE= 'BUY_CAKE'

function buyCake(){
    return {
        type:BUY_CAKE,
        info: 'Firs redux action'
    }
}

// (previousState, action)=>newState

const initalState = {
    numberOfCakes: 10
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ... state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state
    }
}


