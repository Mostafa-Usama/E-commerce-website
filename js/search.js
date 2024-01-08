const Pname = document.getElementById("Pname")
const catagory = document.getElementById("Pcatagory")
const budget = document.getElementById("budget")
const productsContainer = document.getElementById("productsContainer")
let prodcuts = [
    {
        id: 0,
        name: "Golden Watch",
        image: "images/watch1.png",
        price: "$200.00", 
        catagory: "Accessories"

    },
    {
        id: 1,
        name: "Silver Watch",
        image: "images/watch2.png",
        price: "$100.00", 
        catagory: "Accessories"

    },
    {
        id: 2,
        name: "Brown Shoes",
        image: "images/shoes.png",
        price: "$80.00", 
        catagory: "Fashion"

    },
    {
        id: 3,
        name: "Grey Hoodie",
        image: "images/hoodie1.png",
        price: "$100.00", 
        catagory: "Fashion"

    },
    {
        id: 4,
        name: "Black Sunglasses",
        image: "images/sunglasses2.png",
        price: "$700.00", 
        catagory: "Accessories"

    },
    {
        id: 5,
        name: "White Cap",
        image: "images/cap1.png",
        price: "$30.00", 
        catagory: "Sport"

    },
    {
        id: 6,
        name: "Football Shoes",
        image: "images/football1.png",
        price: "$100.00", 
        catagory: "Sport"

    },
    {
        id: 7,
        name: "Blue T-Shirt",
        image: "images/shirt1.png",
        price: "$60.00", 
        catagory: "Fashion"

    },

]
let productsToDraw = [...prodcuts]

Pname.addEventListener("keyup", filterInput)
catagory.addEventListener("keyup", filterInput)
budget.addEventListener("keyup", filterInput)

function filterInput() {
    console.log(Pname.value)
    productsToDraw = prodcuts.filter((product) => product.name.toLowerCase().includes(Pname.value.toLowerCase().trim()))
    productsToDraw = productsToDraw.filter((product) => product.catagory.toLowerCase().includes(catagory.value.toLowerCase().trim()))
    if (budget.value) {
        productsToDraw = productsToDraw.filter((product) => {
            let price = +product.price.replace("$", "")
            console.log(price)
            return price <= budget.value
        })
    }
    renderProducts()
}

function renderProducts() {
    
    productsContainer.textContent = ""
    for (let i = 0; i < productsToDraw.length; i++){
        productsContainer.innerHTML += `
        <div class="col-md-6 col-lg-3 box"  >
        <div class="text-center rounded" >
            <div class="image overflow-hidden position-relative">
                <img src="${productsToDraw[i].image}" loading="lazy" class="img-fluid  bg-secondary bg-opacity-10 rounded-top" alt="Golden Watch">
            </div>
            <div class="px-4 py-4 border">
                <h5 class="">${productsToDraw[i].name}</h5>
                <p class="opacity-75 mb-1 fw-bold">${productsToDraw[i].price}</p>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <p class="opacity-75">Catagory: ${productsToDraw[i].catagory}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <button class="btn rounded-0 fw-bold btn3 bg-white" style="transition: .3s; color: var(--primary); border: 2px solid var(--primary); ">Add to cart</button>
                    <i class="fas fa-heart fa-2x text-secondary" style="cursor: pointer;"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
window.onload = renderProducts