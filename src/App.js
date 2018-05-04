import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';

import logo from './logo.svg';
import './App.css';
import { Store } from './Store';
import { Todos } from './Todos';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Subscribe to={[Store]}>
          {store => (
            <div>
              <Todos store={store} />
              <button onClick={() => store.addTodo('hallo')}>Add new todo</button>
            </div>
          )}
          </Subscribe>
        </div>
      </Provider>
    );
  }
}

export default App;
