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
        name: "Brown Sunglasses",
        image: "images/sunglasses2.png",
        price: "$70.00", 
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
    {
        id: 8,
        name: "Grey Pants",
        image: "images/pants2.png",
        price: "$50.00",
        catagory: "Fashion"

    },
    {
        id: 9,
        name: "Headphones",
        image: "images/headphones1.png",
        price: "$120.00",
        catagory: "Accessories"

    },
    {
        id: 10,
        name: "Argentina Shirt",
        image: "images/Argentina.png",
        price: "$110.00",
        catagory: "Sport"

    },
    {
        id: 11,
        name: "Addidas Shorts",
        image: "images/shorts2.png",
        price: "$75.00",
        catagory: "Sport"

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
            <div class="px-4 py-4 border border-top-0">
                <h5 class="fw-bold">${productsToDraw[i].name}</h5>
                <p class="opacity-75 mb-1 " style="font-weight:600;">Price: ${productsToDraw[i].price}</p>
                <i class="fas fa-star py-2" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                <p class="opacity-75">Catagory: ${productsToDraw[i].catagory}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <button  class="cartBtn btn rounded-0 fw-bold btn3 bg-white" style="transition: .3s; color: var(--primary); border: 2px solid var(--primary); ">Add to cart</button>
                    <i class="fas fa-heart fa-2x text-secondary" style="cursor: pointer;"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }
    if (productsToDraw.length == 0) {
        let h2 = document.createElement("h2")
        h2.textContent = "No prodcuts were found!"
        h2.style.textAlign = "center"
        productsContainer.appendChild(h2)
    }
}
renderProducts()
window.onload = function () {

}