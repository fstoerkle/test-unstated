import * as React from 'react';

export function Todos(props) {
    const { store } = props;
    return (
        <ul>
            {store.state.todos.map(todo => (<li>{todo}</li>))}
        </ul>
    );
}