function createCounter() {
    let counter = 0
    function increment() {
        counter += 1
        console.log(`Count: ${counter}`)
    }
    return increment;
}

const myCounter = createCounter()
myCounter();
myCounter();
myCounter();

console.log('--------------------');

const anotherCounter = createCounter()
anotherCounter();
anotherCounter();
anotherCounter();
anotherCounter();
anotherCounter();

