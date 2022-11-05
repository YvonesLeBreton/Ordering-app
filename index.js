import menuArray from "./data.js";
import Menu from "./Menu.js";
import {
    updateTotalPrice, updateItemPrice, addOrder, getThanksMsg,
    isBeerOrderRender, isPizzaOrderRender, isHamburgerOrderRender
} from "./utility.js";

let pizza = 0
let hambuger = 0
let beer = 0 

const orderBox = document.getElementById("order-box")
const modal = document.getElementById("modal")
const order = document.getElementById("order")
const payForm = document.getElementById("pay-form")

/* Add Item To Order */
document.addEventListener("click", (event) => { 
    event.preventDefault()
    if (event.target.dataset.pizza){
        order.classList.remove("hidden")
        !isPizzaOrderRender ? orderBox.innerHTML += addOrder(pizza) : updateItemPrice(pizza) 
    } 
    if (event.target.dataset.hambuger){
        order.classList.remove("hidden")
        !isHamburgerOrderRender  ? orderBox.innerHTML += addOrder(hambuger) : updateItemPrice(hambuger) 
    } 
    if (event.target.dataset.beer){
        order.classList.remove("hidden")
        !isBeerOrderRender ? orderBox.innerHTML += addOrder(beer) : updateItemPrice(beer) 
    } 
    document.getElementById("total-price").textContent = `Your Order : $${updateTotalPrice(pizza, hambuger, beer)}`
})

/*Display form */
document.getElementById("complete-btn").addEventListener("click", () => modal.classList.remove("hidden")) 

payForm.addEventListener("submit", (event) => { /* Display thanks msg */
    console.log("Rien")
    event.preventDefault()
    const logData = new FormData(payForm)
    document.getElementById("thanks-msg").innerHTML = getThanksMsg(logData)
    modal.classList.add("hidden")
    order.classList.add("hidden")
})

function renderMenu() {
    menuArray.forEach(item => {
        const itemMenu = new Menu(item)
        itemMenu.name === "Pizza" ? pizza = itemMenu :
        itemMenu.name === "Hamburger" ? hambuger = itemMenu :
        beer = itemMenu
        document.getElementById("menu").innerHTML += itemMenu.getItemHtml()
    });
}

renderMenu()
