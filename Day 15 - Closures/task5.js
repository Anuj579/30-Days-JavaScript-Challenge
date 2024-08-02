// Activity 3: Closures in Loop - task5

const functions = []
for (let i = 0; i < 5; i++) {
    functions.push(()=>{
        console.log(`Index of function ${i+1}: ${i}`)
    })
}

functions[0]()
functions[1]()
functions[2]()
functions[3]()



