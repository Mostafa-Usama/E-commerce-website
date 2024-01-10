const login = document.getElementById("login")
const reg = document.getElementById("register")
const logout = document.getElementById("logout")
const logoutLink = document.getElementById("logoutLink") 
const user = document.getElementById("user")
const cart = document.getElementById('cart')
let isSigned = localStorage.getItem("signed") === "true"
let btns
let itemCon = document.getElementById("items-con")
let opened = false
let fav = false

logoutLink.addEventListener('click', ()=> localStorage.setItem("signed", "false"))
cart.addEventListener("click", showItems)

function showItems(e) {
    if (e.target !== e.currentTarget) return;
    opened ? itemCon.style.display = "none" : itemCon.style.display = "flex"
    opened = !opened

}
window.onload = function () {
    if (isSigned) {
        login.style.display = "none"
        reg.style.display = "none"
        logout.style.display = "block"
        user.style.display = "block"
        cart.style.display = "block"
        user.firstElementChild.textContent = `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`

    }
    btns = document.getElementsByClassName("cartBtn")
    draw()
}
let itemsInCart = []

function addToCart(event, id) {
    if (!isSigned) {
        location.assign("login.html")
    }
    else {
        let amount = document.getElementById(`amount${id}`)
        amount = +amount.value
        if (amount > 0 && amount < 100) {
            let i = id
            products[i].amount += amount
            let index
            if (itemsInCart.some((value, ind) => {
                index = ind
                return value.name === products[i].name
            })) {
                itemsInCart[index].amount = products[i].amount
            }
            else {
                itemsInCart.push({
                    name: products[i].name,
                    amount: products[i].amount,
                    id: products[i].id
                })
            }
            let toastElList = document.querySelector('.toast')
            let body = document.querySelector('.toast-body')
            let toast = new bootstrap.Toast(toastElList)
            body.textContent = `You added ${products[i].name} to your Cart!`
            toast.show()

            let btn = event["target"] 
            btn.onclick = null
            btn.onclick = ()=> {
                removeFromCart(event, id)
            }
            btn.textContent = "Remove From Cart"
       
            draw()
        }
    }

}

function removeFromCart(event, id) {
    let btn = event["target"]
    let i = id
    console.log(i)
    products[i].amount = 0
    let index = itemsInCart.findIndex((ele) => ele.id === id)
    itemsInCart.splice(index, 1)
    btn.onclick = null
    btn.onclick = function x() {
        addToCart(event, i)
    }
    btn.textContent = "Add To Cart"

    let toastElList = document.querySelectorAll('.toast')
    let body = document.querySelectorAll('.toast-body')
    let toast = new bootstrap.Toast(toastElList[1])
    body[1].textContent = `You Removed ${products[i].name} from your Cart!`
    toast.show()

    draw()
}

function draw() {
    itemCon.innerHTML = ""
    if (itemsInCart.length == 0) {
        let p = document.createElement("p")
        p.textContent = "Cart Empty"
        p.style.textAlign = "center"
        p.style.fontSize = "16px"
        itemCon.appendChild(p)
    }
    else {
        for (let i = 0; i < itemsInCart.length; i++) {
            itemCon.innerHTML += `
            <div class="d-flex mb-2 bg-secondary bg-opacity-10 justify-content-between align-items-center  px-2 py-3 rounded" style="min-width:250px;">
                <p class="m-0 fs-6" >${itemsInCart[i].name}</p>
                <div class=''>
                    <span  onclick="remove(event, ${itemsInCart[i].id})" class="px-2" style="cursor: pointer; color: red;">-</span>
                    <span class="m-0 fs-6">${itemsInCart[i].amount}</span>
                    <span onclick="add(event, ${itemsInCart[i].id})" style="cursor: pointer; color: green;" class="px-2 fw-bold">+</span>
                </div>
                </div>
         
            `
        }
        itemCon.innerHTML += ` <button onclick="clearCart(event)"  class=" btn rounded-0 fw-bold btn3 bg-white" style="transition: .3s; color: var(--primary); border: 2px solid var(--primary); ">Clear Cart</button>`
    }
}

function add(event, id) {
    products[id].amount += 1
    let index = itemsInCart.findIndex((ele) => ele.id === id)
    itemsInCart[index].amount = products[id].amount
    event["target"].previousElementSibling.textContent = products[id].amount 
}
function remove(event, id) {
    products[id].amount -= 1
    let index = itemsInCart.findIndex((ele) => ele.id === id)
    itemsInCart[index].amount = products[id].amount
    if (products[id].amount == 0) {
        itemsInCart.splice(index, 1)
        let btn = event["target"]
        console.log(btn, event)
        btn.removeEventListener("click", removeFromCart)
        btn.onclick = function () {
            addToCart(event, id)
        }
        btn.textContent = "Add To Cart"

        draw()
        
    }
    else {
        event["target"].nextElementSibling.textContent = products[id].amount
    }
}

function clearCart(event) {
    products.forEach((ele) => ele.amount = 0)
    itemsInCart.splice(0)
    Array.from(btns).forEach((btn, i) => {
        btn.removeEventListener("click", removeFromCart)
        btn.onclick = function () {
            addToCart(event, i)
        }
        btn.textContent = "Add To Cart"
    })

    draw()
}
function reset(event) {
    if (!event["target"].value) {
        event["target"].value = 1
    }
    console.log(event["target"].value)
}


function favourite(event, id) {
    products[id].fav ? event["target"].style.color = "" : event["target"].style.color = "red"
    products[id].fav = !products[id].fav
}