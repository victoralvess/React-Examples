import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer } = Context;

class App extends Component {

  state = {
    count: 0,
    onIncrement: () => this.setState((prevState) => ({ count: prevState.count + 1 })),
    onDecrement: () => this.setState((prevState) => ({ count: prevState.count - 1 }))
  };

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }

}

export { Consumer, App };