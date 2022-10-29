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
            let addToCart = document.createElement('button')
            addToCart.innerText = 'Add to Cart'
            addToCart.className = "addBtn"
            addToCart.addEventListener('click', handleAddToCart)
            
            clothingCard.append(image, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }


function handleAddToCart(){
    alert("Item Added to Cart!")

    let cart = document.getElementById('cart')
    let numberOfItems = document.createElement('p')
    numberOfItems.innerText = //counter here 

    cart.appendChild()
}

//add a clear all button to remove elements from dom that are currently there - all child nodes of the container