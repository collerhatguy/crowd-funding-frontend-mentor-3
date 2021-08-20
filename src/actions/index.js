
export const BACK_PROJECT = "BACK_PROJECT";
export const backProject = () => ({
    type: BACK_PROJECT
})

export const DONATE_MONEY = "DONATE_MONEY";
export const donateMoney = (money) => ({
    type: DONATE_MONEY, payload: money
})

export const REVEAL_SELECTION = "REVEAL_SELECTION";
export const revealSelection = () => ({
    type: REVEAL_SELECTION
})

export const REVEAL_SUCCESS = "REVEAL_SUCCESS";
export const revealSuccess = () => ({
    type: REVEAL_SUCCESS
})
