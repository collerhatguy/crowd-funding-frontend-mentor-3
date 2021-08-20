import { BACK_PROJECT, DONATE_MONEY, REVEAL_SELECTION, REVEAL_SUCCESS } from "../actions";

const initialState = {
    backers: 5007,
    moneyRaised: 89914,
    backed: false,
    revealSuccess: false,
    revealSelection: false,
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case REVEAL_SELECTION:
            return {
                ...state,
                revealSelection: !state.revealSelection
            }
        case REVEAL_SUCCESS:
            return {
                ...state,
                revealSuccess: !state.revealSuccess
            }
        case BACK_PROJECT:
            return {
                ...state,
                backers: state.backed ? state.backers - 1 : state.backers + 1,
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