const productsContainer = document.getElementById("productsContainer")
let products
function getData() {
    products = JSON.parse(localStorage.getItem("data"))
    renderProducts()
}

function renderProducts() {
    productsContainer.textContent = ""
    for (let i = 0; i < products.length; i++) {
       

        productsContainer.innerHTML += `
        <div class="row align-items-center text-center text-md-start" >
                    <div class="col-md-4 box">
                        <img src="${products[i].image}" loading="lazy" class=" w-100 img-fluid  bg-secondary bg-opacity-10 rounded-top"
                            alt="Golden Watch">
                    </div>
                    <div class="col-md-4">
                        <div class="px-4 py-4  position-relative">
                            <h5 class="fw-bold">${products[i].name}</h5>
                            <p class="opacity-75 mb-1 fw-bold " >${products[i].price}</p>
                            <i class="fas fa-star py-2" style="color: rgb(255, 192, 34);"></i>
                            <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                            <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                            <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                            <i class="fas fa-star" style="color: rgb(255, 192, 34);"></i>
                            <p class="opacity-75">Catagory: ${products[i].catagory}</p>
                            <div class="col-md-4 d-flex justify-content-between m-auto m-md-0 align-items-center" style="max-width: 100px;">
                                <p class="px-2 fs-1 m-0" style="cursor: pointer; color: red;">-</p>
                                <p class="fw-bold mx-3 my-0">${products[i].amount}</p>
                                <p style="cursor: pointer; color: green;" class="m-0 fs-2 px-2 fw-bold">+</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4 align-self-center text-center text-md-start">
                        <button class="mb-3 cartBtn${products[i].id} btn  py-2 rounded-0 fw-bold btn4 border-2 border-black bg-white">Remove From Cart</button>
                    </div>
                </div>
                <hr>
        `
    }
    if (products.length == 0) {
        let h2 = document.createElement("h2")
        h2.textContent = "You haven't added any items to the cart"
        h2.style.textAlign = "center"
        productsContainer.appendChild(h2)
    }
}

window.onload = getData
