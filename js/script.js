const login = document.getElementById("login")
const reg = document.getElementById("register")
const logout = document.getElementById("logout")
const logoutLink = document.getElementById("logoutLink") 
const user = document.getElementById("user")
const cart = document.getElementById('cart')
let isSigned = localStorage.getItem("signed") === "true"
let btns

logoutLink.addEventListener('click', ()=> localStorage.setItem("signed", "false"))

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
    Array.from(btns).forEach(function (btn) {
        btn.addEventListener("click", addToCart)    
    })
}

function addToCart(event) {
    if (!isSigned) {
        location.assign("login.html")
    }
    let i = Array.from(btns).indexOf(event["target"])

}