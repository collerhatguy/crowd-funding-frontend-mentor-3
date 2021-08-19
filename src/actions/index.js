
export const BACK_PROJECT = "BACK_PROJECT";
export const backProject = () => ({
    action: BACK_PROJECT
})

export const DONATE_MONEY = "DONATE_MONEY";
export const donateMoney = (money) => ({
    action: DONATE_MONEY, payload: money
})
