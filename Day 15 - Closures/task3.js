// Activity 2: Practical Closures - task3 to task4

function createIdGenerator(){
    let lastId = 0;
    return function(){
        lastId++;
        return lastId;
    }
}

const newID = createIdGenerator()
console.log(newID())
console.log(newID())
console.log(newID())
console.log(newID())