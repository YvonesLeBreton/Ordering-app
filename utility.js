let totalPrice = 0
let isPizzaOrderRender = false
let isHamburgerOrderRender = false
let isBeerOrderRender = false

function isItemRender(name) {
    name === "Pizza" ? isPizzaOrderRender = true : 
    name === "Hamburger" ? isHamburgerOrderRender = true : 
    isBeerOrderRender = true
}

function updateItemPrice(item, modify) {
    if (modify === "add") {
        item.quantity ++
    }
    if (modify === "remove") {
        item.quantity --
    }
    document.getElementById(`${item.name}-price`).textContent = `$${item.quantity*item.price}`
    document.getElementById(`${item.name}-quantity`).textContent = `Quantity: ${item.quantity}`
}

function updateTotalPrice(pizza, hambuger, beer) { /* Update total price */
    return totalPrice = (pizza.price * pizza.quantity) + (beer.price * beer.quantity) + (hambuger.price * hambuger.quantity)
}

function getThanksMsg(data) { /* HTML for thanks message */
    return `<p>Thank, ${data.get("name")}! Your order is on the way ! 🥳</p>`
}

function resetVariables() { /* Reset all variables than we can use evry time an order is send */
    totalPrice = 0
    isPizzaOrderRender = false
    isHamburgerOrderRender = false
    isBeerOrderRender = false
}


export {
    updateTotalPrice, 
    updateItemPrice,
    getThanksMsg,
    resetVariables,
    isItemRender,
    isPizzaOrderRender,
    isHamburgerOrderRender,
    isBeerOrderRender
}