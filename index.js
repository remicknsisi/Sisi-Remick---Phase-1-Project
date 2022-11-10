//setting up submit functionality
document.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    const input = e.target.childNodes[1].value

    fetch('http://localhost:3000/clothes')
    .then(response => response.json())
    .then(arrayOfObj => arrayOfObj.filter(function(obj){
        if(obj.type === input){
        return obj}
        })
    )
    .then(foundObjs => foundObjs.forEach(foundObj => renderClothing.call(foundObj)))
}

function renderClothing(){
    const clothingContainer = document.getElementById('container')

            const clothingCard = document.createElement('div')
            clothingCard.className = "clothing-card"
            const price = document.createElement('p')
            price.innerText = this.price
            const image = document.createElement('img')
            image.src = this.image
            image.className = "image"
            const name = document.createElement('p')
            name.innerText = this.name
            const addToCart = document.createElement('button')
            addToCart.innerText = 'Add to Cart'
            addToCart.className = "addBtn"
            addToCart.addEventListener('click', handleAddToCart)
            addToCart.addEventListener('mouseenter', handleMouseEnter)
            addToCart.addEventListener('mouseout', handleMouseLeave)
            
            clothingCard.append(image, name, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }

//initialization of my cart on the DOM
const cart = document.getElementById('cart')
const cartCard = document.createElement('div')
cartCard.className = "cart-card"
const title = document.createElement('h4')
title.innerText = "My Cart"
const cartValue = document.createElement('p')
cartValue.innerText = `Total: $0`

cartCard.append(title, cartValue)
cart.appendChild(cartCard)

//cart add & remove functionality
function handleAddToCart(e){
    alert("Item Added to Cart!")

    const cartTable = document.createElement('table')

    const product = document.createElement('td')
    const productName = e.target.parentNode.childNodes[1].innerText
    product.innerText = productName

    const price = document.createElement('td')
    price.className = 'item-price'
    const productPrice = e.target.parentNode.childNodes[2].innerText
    price.innerText = productPrice

    const removeButton = document.createElement('button')
    removeButton.innerText = "x"
    removeButton.addEventListener('click', handleRemoval)

    const currentCartTotal = parseInt(cartValue.innerText.split('$')[1])
    const newProductPrice = parseInt(productPrice.split('$')[1])
    
    const newCartTotal = currentCartTotal + newProductPrice
    cartValue.innerText = `Total: $${newCartTotal}`

    cartTable.append(product, price, removeButton)

    cartCard.append(cartTable)
}

function handleRemoval(e){
    const additionToCartTotal = parseInt(e.target.parentNode.childNodes[1].innerText.split('$')[1])
    const cartTotal = parseInt(cartValue.innerText.split('$')[1])

    const updatedCartTotal = cartTotal - additionToCartTotal
    cartValue.innerText = `Total: $${updatedCartTotal}`

    e.target.parentNode.remove()
}

//setup of 'Clear All' button and functionality
const clearAll = document.getElementById('clear-search')
clearAll.addEventListener('click', handleClearAll)

function handleClearAll(){
    const container = document.getElementById('container')
    container.innerHTML = ''
}

//mouseover events
function handleMouseEnter(){
        this.style.backgroundColor = 'orange'
}

function handleMouseLeave(){
    this.style.backgroundColor = null
}