function fn(name){
    return function greet(){
        console.log(`Hello, ${name}!`)
    }
}

const func = fn("Anuj")
func()

const func2 = fn("Tushar")
func2()

const func3 = fn("Roy")
func3()