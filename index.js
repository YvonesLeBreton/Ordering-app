import menuArray from "./data.js";
import Menu from "./Menu.js";
import {
    updateTotalPrice, updateItemPrice, getThanksMsg, resetVariables,
    isBeerOrderRender, isPizzaOrderRender, isHamburgerOrderRender
} from "./utility.js";

let pizza = 0
let hamburger = 0
let beer = 0 

const orderBox = document.getElementById("order-box")
const modal = document.getElementById("modal")
const order = document.getElementById("order")
const payForm = document.getElementById("pay-form")
const thanksMsg = document.getElementById("thanks-msg")
const menu = document.getElementById("menu")

/* Add Item To Order */
document.addEventListener("click", event => { 
    /* Remove the message after a order had already been received */
    if (thanksMsg.innerHTML) {
        thanksMsg.innerHTML = ""
        orderBox.innerHTML = ""
        menu.innerHTML = ""
        renderMenu()
    }

    /* EventListener for add to order */
    if (event.target.dataset.pizza){
        order.classList.remove("hidden")
        !isPizzaOrderRender ? renderOrder(pizza) : updateItemPrice(pizza, "add") 
        document.getElementById("Pizza").classList.remove("hidden")
    } 
    if (event.target.dataset.hamburger){
        order.classList.remove("hidden")
        !isHamburgerOrderRender  ? renderOrder(hamburger) : updateItemPrice(hamburger, "add") 
        document.getElementById("Hamburger").classList.remove("hidden")
    } 
    if (event.target.dataset.beer){
        order.classList.remove("hidden")
        !isBeerOrderRender ? renderOrder(beer) : updateItemPrice(beer, "add") 
        document.getElementById("Beer").classList.remove("hidden")
    } 

    /* EventListener for remove a order and hide the box if quantity = 0 */
    if (event.target.dataset.removepizza) {
        updateItemPrice(pizza, "remove") 
        if (pizza.quantity === 0) {
            document.getElementById("Pizza").classList.add("hidden")
        }
    }
    if (event.target.dataset.removehamburger) {
        updateItemPrice(hamburger, "remove") 
        if (hamburger.quantity === 0) {
            document.getElementById("Hamburger").classList.add("hidden")
        }
    }
    if (event.target.dataset.removebeer) {
        updateItemPrice(beer, "remove") 
        if (beer.quantity === 0) {
            document.getElementById("Beer").classList.add("hidden")
        }
    }

    /* Remove order-box if no order left */
    if (!beer.quantity && !pizza.quantity && !hamburger.quantity) {
        order.classList.add("hidden")
    }
    /* Update total price each time we add or remove a item */
    document.getElementById("total-price").textContent = `Your Order : $${updateTotalPrice(pizza, hamburger, beer)}`
})

/*Display form */
document.getElementById("complete-btn").addEventListener("click", () => modal.classList.remove("hidden")) 

document.getElementById("close-modal-btn").addEventListener("click", () => {
    modal.classList.add("hidden")
    payForm.reset()
})

payForm.addEventListener("submit", event => { /* Display thanks msg */
    event.preventDefault()
    const logData = new FormData(payForm)
    thanksMsg.innerHTML = getThanksMsg(logData)
    modal.classList.add("hidden")
    order.classList.add("hidden")
    resetVariables() 
    payForm.reset()
})

function renderMenu() { /* Render the menu */
    menuArray.forEach(item => {
        const itemMenu = new Menu(item)
        itemMenu.name === "Pizza" ? pizza = itemMenu :
        itemMenu.name === "Hamburger" ? hamburger = itemMenu :
        beer = itemMenu
        document.getElementById("menu").innerHTML += itemMenu.getItemHtml()
    })
}

function renderOrder(item) {
    orderBox.innerHTML += item.getOrderHtml()
}

renderMenu()
