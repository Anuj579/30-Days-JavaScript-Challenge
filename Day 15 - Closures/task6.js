// Activity 4: Module pattern - task6

function createItemManager(){
    let items = []

    function addItem(item){
        items.push(item)
        console.log(`Item added: ${item}`);
        
    }

    function removeItem(item){
        const index = items.indexOf(item)
        if(index !== -1){
            items.splice(index, 1)
            console.log(`Item removed: ${item}`)
        }else{
            console.log(`Item not found: ${item}`)
        }
    }

    function listItems(){
        console.log('Current items:')
        items.forEach(item => console.log(item))
    }

    return {
        add: addItem,
        remove: removeItem,
        list: listItems
    }
}

const createItem = createItemManager()
createItem.add('item1')
createItem.add('item2')
createItem.remove('item1')
createItem.list()