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
            // addToCart.addEventListener('mouseover', handleMouseover)
            
            clothingCard.append(image, name, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }

//initialization of my cart
let cart = document.getElementById('cart')
let cartCard = document.createElement('div')
cartCard.className = "cart-card"
let title = document.createElement('h4')
title.innerText = "My Cart"
let total = document.createElement('p')
total.innerText = `Total: `

cartCard.append(title, total)
cart.appendChild(cartCard)


function handleAddToCart(e){
    alert("Item Added to Cart!")

    let cartTable = document.createElement('table')

    let item = document.createElement('td')
    item.innerText = e.target.parentNode.childNodes[1].innerText

    let itemPrice = document.createElement('td')
    itemPrice.innerText = e.target.parentNode.childNodes[2].innerText

    let removeButton = document.createElement('button')
    removeButton.innerText = "x"
    removeButton.addEventListener('click', handleRemoval)

    cartTable.append(item, itemPrice, removeButton)

    cartCard.append(cartTable)
}

function handleRemoval(e){
    e.target.parentNode.remove()
}

//setup of 'Clear All' button functionality
let clearAll = document.getElementById('clear-search').childNodes[1]
clearAll.addEventListener('click', handleClearAll)

function handleClearAll(){
    let container = document.getElementById('container')
    container.innerHTML = ''
}
// function handleMouseover(e){
//     e.target.innerHTML = `
//     <strong>
//         ${e.target.innerText}
//     </strong>`
//     //how do I unbold when scroll away?
// }

// let clearAll = document.createElement('button')
// clearAll.innerText = "Clear All"
// clearAll.className = "btn"
// let submitContainer = document.getElementById('search-bar-container')
// submitContainer.appendChild(clearAll)
// document.addEventListener('click', handleClearAll)

// function handleClearAll(){
//     let container = document.getElementsByClassName('clothing-card')
//     container.map(item => item.remove())
// }
