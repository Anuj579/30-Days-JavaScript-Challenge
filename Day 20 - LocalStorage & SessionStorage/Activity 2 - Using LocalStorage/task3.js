function saveUserData(event) {
    event.preventDefault()
    const myName = document.getElementById('name').value
    const email = document.getElementById('email').value

    localStorage.setItem('name', myName)
    localStorage.setItem('email', email)

    displayUserData()
}

function displayUserData() {
    const savedData = document.getElementById('savedData')
    const savedName = localStorage.getItem("name")
    const savedEmail = localStorage.getItem("email")

    if (savedName && savedEmail) {
        savedData.innerHTML = `Name: ${savedName}, Email: ${savedEmail}`
    } else {
        savedData.innerHTML = "No saved data"
    }
}

document.getElementById('userForm').addEventListener('submit', saveUserData)
window.onload = displayUserData