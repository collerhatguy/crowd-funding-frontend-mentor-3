class item {
    constructor(title, cost, description, quantity) {
        this.title = title;
        this.cost = cost;
        this.quantity = quantity;
        this.description = description;
    }
}
const item1 = new item("Banmboo Stand", 25,"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", 101)
const item2 = new item("Black Edition Stand", 75, "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 64)
const item3 = new item("Mahogany Special Edition", 200, "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 0)
const items = [
    item1,
    item2,
    item3,
]
export default items;