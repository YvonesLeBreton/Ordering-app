import menuArray from "./data.js"

let totalPrice = 0
let isPizzaOrderRender = false
let isHamburgerOrderRender = false
let isBeerOrderRender = false

function addOrder(data, isRender) {
    data.quantity++
    const {name, price, quantity} = data
    name === "Pizza" ? isPizzaOrderRender = true : 
    name === "Hamburger" ? isHamburgerOrderRender = true : 
    isBeerOrderRender = true
    return `
        <div class="item" id="${name}">
        <div class="left-box">
            <h4>${name}</h4>
            <button class="remove-btn">remove</button>
            <p id="${name}-quantity">Quantity: ${quantity}</p>
        </div>
        <p id="${name}-price">$${quantity*price}</p>
    </div>
    ` 
}

function updateItemPrice(item) {
    item.quantity ++
    document.getElementById(`${item.name}-price`).textContent = `$${item.quantity*item.price}`
    document.getElementById(`${item.name}-quantity`).textContent = `Quantity: ${item.quantity}`
}

function updateTotalPrice(pizza, hambuger, beer) {
    return totalPrice = (pizza.price * pizza.quantity) + (beer.price * beer.quantity) + (hambuger.price * hambuger.quantity)
}

function getThanksMsg(data) {
    return `<p>Thank, ${data.get("name")}! Your order is on the way ! 🥳</p>`
}

export {
    addOrder, 
    updateTotalPrice, 
    updateItemPrice,
    getThanksMsg,
    isPizzaOrderRender,
    isHamburgerOrderRender,
    isBeerOrderRender
}