const myImg = document.getElementById('img')
myImg.addEventListener('dblclick', function(){
    if (myImg.style.opacity === '1'){
        myImg.style.opacity = '0'
    }else{
        myImg.style.opacity = '1'
    }
})