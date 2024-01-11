const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("regForm")
let profileImage

form.addEventListener('submit',saveData )
function loadImage(event) {
    profileImage = URL.createObjectURL(event.target.files[0])
}

function saveData(event) {
    event.preventDefault()

    localStorage.setItem("firstName", firstName.value.trim())
    localStorage.setItem("lastName", lastName.value.trim())
    localStorage.setItem("email", email.value.trim())
    localStorage.setItem("password", password.value.trim())
    location.assign("login.html")
}
