import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt : "text from component state",
      cat : 0
    }
  }

  update(e) {
    this.setState({txt : e.target.value});
  };

  render() {
    return(
      <div>
        <h1>React App</h1>
        <input type="text" onChange={this.update.bind(this)} />
        <h2>{this.state.txt} {this.state.cat}</h2>

        <Child update={this.update.bind(this)} />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />
  }
}

export default App;
