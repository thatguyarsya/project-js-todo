var todo = ['Eat', 'Sleep', 'Not die']
//==

const showTodo = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        console.log(`[$(index + 1)] ${item}`)
    }
}

//===

const searchTodo = (data, searchText) => {
    let newTodo = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const LCitem = item.toLowerCase()
        const LCtext = searchText.toLowerCase()

        if (LCitem.includes(LCtext)) {
            newTodo.push(item)
        }
    }

    return newTodo
}

//=====
showTodo(todo)
//=====

const textInput = prompt('Wut Todo Today?')
const foundTodo = searchTodo(todo, textInput)

showTodo(foundTodo)