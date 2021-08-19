import { BACK_PROJECT, DONATE_MONEY } from "../actions";

const initialState = {
    backers: 5007,
    moneyRaised: 89914,
    backed: false
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case BACK_PROJECT:
            return {
                ...state,
                backers: backed ? state.backers - 1 : state.backers + 1,
                backed: !state.backed
            }
        case DONATE_MONEY:
            return {
                ...state,
                moneyRaised: state.moneyRaised + actions.payload
            }
        default: 
            return state
    }
}

export default reducer;