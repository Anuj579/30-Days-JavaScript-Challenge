function test1(a) {
    return a * 2
}

function test2(a) {
    return a * a
}

function higherOrderFunction(f1, f2, value) {
    const result1 = f1(value)
    const result2 = f2(result1)
    return result2
}

const finalResult = higherOrderFunction(test1, test2, 2);
console.log(finalResult)