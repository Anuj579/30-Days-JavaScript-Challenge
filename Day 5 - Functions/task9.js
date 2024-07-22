// Activity 5: Higher-Order Functions - task9 to task10

function higherOrderFunction(callback, n){
    for (let i = 1; i <= n; i++) {
        callback();
    }
}

function test(){
    console.log("Hello"); 
}

higherOrderFunction(test, 8)
