
export const BACK_PROJECT = "BACK_PROJECT";
export const backProject = () => ({
    type: BACK_PROJECT
})

export const DONATE_MONEY = "DONATE_MONEY";
export const donateMoney = (money) => ({
    type: DONATE_MONEY, payload: money
})
