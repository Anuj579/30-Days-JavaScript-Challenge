// Activity 2: Finally Block - task3

function test(n) {

    try {
        if (n === 5) {
            console.log('Try block executing');
        } else {
            throw new Error('The number is not 5.')
        }
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        console.log('Finally block executing');
    }
}

test(5)
