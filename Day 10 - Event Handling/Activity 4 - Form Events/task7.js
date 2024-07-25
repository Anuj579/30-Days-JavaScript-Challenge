const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', function(e){
    e.preventDefault()
    // const name = document.getElementById('name').value
    // const email = document.getElementById('email').value
    // const phone = document.getElementById('phone').value
    // console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);

    const formData = new FormData(myForm)

    formData.forEach((value, key)=>{
        console.log(`${key}: ${value}`);
    })
})