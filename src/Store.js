import { Container } from 'unstated';

// evil global variable
let counter = 1;

export class Store extends Container {
    state = {
        todos: [],
        wip: false
    }

    addTodo = (newTodo) => {
        this.setState({
            wip: true
        });

        setTimeout(() => {
            this.setState({
                todos: [ ...this.state.todos, `${newTodo} ${counter++}` ],
                wip: false
            });
        }, 2000);
    };
}