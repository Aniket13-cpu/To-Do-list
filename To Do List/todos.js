let input = prompt("What would you Like to Do?");
let todo = ['Collect Chicken Eggs', 'Clean Litter Box'];
while(input !== 'quit' && input != 'q') {
    if(input == 'list') {
        console.log('*********************');
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('*********************');
    }
    else if(input === 'new') {
        const newTodo = prompt('Ok, Enter the new To Do');
        todo.push(newTodo);
        console.log(`${newTodo} is added to list`);
    }
    else if(input === 'delete') {
        const idx = parseInt(prompt('Ok, Enter the index'));
        if(!Number.isNaN(idx)) {
            const deletedStuff = todo.splice(idx, 1);
            console.log(`You deleted ${deletedStuff}`);
        }
        else {
            console.log('Invalid Index');
        }
    }
    input = prompt("What do you Like to do?");
}
console.log("OK, YOU QUIT THE GAME!!!");