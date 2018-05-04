import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';

import './App.css';
import { Store } from './Store';
import { Todos } from './Todos';

function LoadingIndicator() {
  return <img src="https://media3.giphy.com/media/131tNuGktpXGhy/giphy.gif" alt="loading"/>;
}

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
              {store.state.wip && <LoadingIndicator/>}
            </div>
          )}
          </Subscribe>
        </div>
      </Provider>
    );
  }
}

export default App;
