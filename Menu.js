import { isItemRender } from "./utility.js"

class Menu {
    constructor(data) {
        Object.assign(this, data)
        this.quantity = 0 
    }

    getItemHtml() { /* Give HTML to render one item of the menu */
        const {name, ingredients, price, emoji, id} = this
        return `
            <div class="menu-item item">
                <div class="left-box">
                    <h3>${emoji}</h3>
                    <div>
                        <h4>${name}</h4>
                        <p class="recipe">${ingredients}</p>
                        <p class="price">$${price}</p>
                    </div>
                </div>
                <button class="add-btn" data-${name}=${id}>+</button>
            </div>
        `
    }

    getOrderHtml() { /* Give HTML to render one item to the order section*/
        const {name, price, id} = this
        isItemRender(name)
        this.quantity++
        return `
            <div class="item" id="${name}">
            <div class="left-box">
                <h4>${name}</h4>
                <button class="remove-btn" data-remove${name}=${id}>remove</button>
                <p id="${name}-quantity">Quantity: ${this.quantity}</p>
            </div>
            <p id="${name}-price">$${this.quantity*price}</p>
            </div>
        ` 
    }
}

export default Menu