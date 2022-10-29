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
            // else alert(`Nothing in stock for ${input}!`)
        })
    )
}

// document.addEventListener('DOMContentLoadad', renderClothing)

function renderClothing(){
    let clothingContainer = document.getElementById('container')

            let clothingCard = document.createElement('div')
            clothingCard.className = "clothing-card"
            let price = document.createElement('p')
            price.innerText = this.price
            let image = document.createElement('img')
            image.src = this.image
            let addToCart = document.createElement('button')
            addToCart.innerText = 'Add to Cart'
            addToCart.addEventListener('click', handleAddToCart)
            
            clothingCard.append(image, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }


function handleAddToCart(){
    alert("Item Added to Cart!")


}