let submitBtn = document.getElementsByClassName('submit')

document.addEventListener('submit', handleSubmit)
// document.addEventListener()

function handleSubmit(e){
    e.preventDefault()

    let searchBar = document.getElementsByClassName('enter-type')
    let input = searchBar[0].value
    //should I define these in relation to e.target?

    fetch('http://localhost:3000/clothes')
    .then(response => response.json())
    .then(arrayOfObj =>
        arrayOfObj.map(obj => {
            obj.type === input
            return renderClothing.call(obj)
            }
        )
    )
}

document.addEventListener('DOMContentLoadad', renderClothing)
let clothingContainer = document.getElementById('container')

function renderClothing(){
    fetch('http://localhost:3000/clothes')
    .then(response => response.json())
    .then(arrayOfClothing => {
        for (i = 0; i < arrayOfClothing.length; i++){
            let clothingCard = document.createElement('div')
            //can set class names here to set styling later in CSS file
            let price = document.createElement('p')
            price.innerText = arrayOfClothing[i].price
            let image = document.createElement('img')
            image.src = arrayOfClothing[i].image
            let addToCart = document.createElement('button')
            addToCart.innerText = 'Add to Cart'
            addToCart.addEventListener('click', handleAddToCart)
            
            clothingCard.append(image, price, addToCart)

            clothingContainer.appendChild(clothingCard)
        }
    }
  )
}

function handleAddToCart(){

}