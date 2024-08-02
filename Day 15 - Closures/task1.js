// Activity 1: Understanding Closures - task1 to task2

function outerFn(a) {
    function innerFn() {
        console.log(a);

    }
    return innerFn;
}

const myInnerFn = outerFn("Hello, Closures!") 
myInnerFn()
// outerFn("Hello Closures")() 