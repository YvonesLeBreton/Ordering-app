class Menu {
    constructor(data) {
        Object.assign(this, data)
        this.quantity = 0 
    }

    getItemHtml() {
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
}

export default Menu