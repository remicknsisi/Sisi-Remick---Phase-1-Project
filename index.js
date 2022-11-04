document.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    let input = e.target.childNodes[1].value

    fetch('http://localhost:3000/clothes')
    .then(response => response.json())
    .then(arrayOfObj => arrayOfObj.map(obj => {
        if(obj.type === input){
            renderClothing.call(obj)
            } 
        })
    )
    //I want to alert('Not in Stock') if there is no match in the database
    //find a way to use filter here in addition to map --> THEN use map or foreach to render clothing for each 
}

function renderClothing(){
    let clothingContainer = document.getElementById('container')

            let clothingCard = document.createElement('div')
            clothingCard.className = "clothing-card"
            let price = document.createElement('p')
            price.innerText = this.price
            let image = document.createElement('img')
            image.src = this.image
            image.className = "image"
            let name = document.createElement('p')
            name.innerText = this.name
            let addToCart = document.createElement('button')
            addToCart.innerText = 'Add to Cart'
            addToCart.className = "addBtn"
            addToCart.addEventListener('click', handleAddToCart)
            addToCart.addEventListener('mouseenter', handleMouseEnter)
            addToCart.addEventListener('mouseout', handleMouseLeave)
            
            clothingCard.append(image, name, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }

//initialization of my cart on the DOM
let cart = document.getElementById('cart')
let cartCard = document.createElement('div')
cartCard.className = "cart-card"
let title = document.createElement('h4')
title.innerText = "My Cart"
let totalInCart = document.createElement('p')
totalInCart.innerText = `Total: $0`
//use const where you can

cartCard.append(title, totalInCart)
cart.appendChild(cartCard)


function handleAddToCart(e){
    alert("Item Added to Cart!")

    //rename some of these variables more intuitively

    let cartTable = document.createElement('table')

    const item = document.createElement('td')
    item.innerText = e.target.parentNode.childNodes[1].innerText

    const itemPrice = document.createElement('td')
    itemPrice.className = 'item-price'
    const priceOfItem =e.target.parentNode.childNodes[2].innerText
    itemPrice.innerText = priceOfItem

    let removeButton = document.createElement('button')
    removeButton.innerText = "x"
    removeButton.addEventListener('click', handleRemoval)

    let currentCartTotal = parseInt(totalInCart.innerText.split('$')[1])
    let newItemPrice = parseInt(priceOfItem.split('$')[1])
    
    let newCartTotal = currentCartTotal + newItemPrice
    totalInCart.innerText = `Total: $${newCartTotal}`

    cartTable.append(item, itemPrice, removeButton)

    cartCard.append(cartTable)
}

function handleRemoval(e){
    let additionToCart = parseInt(e.target.parentNode.childNodes[1].innerText.split('$')[1])

    let currentCartTotal = parseInt(totalInCart.innerText.split('$')[1])
    let newCartTotal = currentCartTotal - additionToCart
    totalInCart.innerText = `Total: $${newCartTotal}`

    e.target.parentNode.remove()
}

//setup of 'Clear All' button and functionality
let clearAll = document.getElementById('clear-search')
clearAll.addEventListener('click', handleClearAll)

function handleClearAll(){
    let container = document.getElementById('container')
    container.innerHTML = ''
}

//mouseover events
function handleMouseEnter(){
        this.style.backgroundColor = 'orange'
}

function handleMouseLeave(){
    this.style.backgroundColor = null
}

//how do I credit sources for the pictures?