const login = document.getElementById("login")
const reg = document.getElementById("register")
const logout = document.getElementById("logout")
const logoutLink = document.getElementById("logoutLink") 
const user = document.getElementById("user")
const cart = document.getElementById('cart')
let isSigned = localStorage.getItem("signed") === "true"

logoutLink.addEventListener('click', ()=> localStorage.setItem("signed", "false"))

window.onload = function () {
    isSigned = localStorage.getItem("signed") === "true"
    if (isSigned) {
        login.style.display = "none"
        reg.style.display = "none"
        logout.style.display = "block"
        user.style.display = "block"
        cart.style.display = "block"
        user.firstElementChild.textContent = `${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`

    }
}