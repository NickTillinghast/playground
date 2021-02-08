import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import Api from './components/api_component/api_component'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Api />
      </div>
    );
  }
}

export default App;
