function saveUserData(e){
    e.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('email', email)

    displayUserData()
}

function displayUserData(){
    const element = document.getElementById('savedDataElement')
    let retrievedName = sessionStorage.getItem('name')
    let retrievedEmail = sessionStorage.getItem('email')

    if (retrievedName && retrievedEmail) {
        element.innerHTML = `Name: ${retrievedName}, Email: ${retrievedEmail}`
    } else {
        element.innerHTML = 'No data saved'
    }
}

document.getElementById('userForm').addEventListener('submit', saveUserData)
window.onload = displayUserData