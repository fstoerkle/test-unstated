import { Container } from 'unstated';

export class Store extends Container {
    state = {
        todos: []
    }

    addTodo = (newTodo) => {
        setTimeout(() => {
            this.setState({
                todos: [ ...this.state.todos, newTodo ]
            });
        }, 2000);
    };
}