import React, { Component } from 'react';
//import logo from './logo.svg';
import Container from './Container'
import Button from './components/Button'
import MainGame from './MainGame'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const alphabet = 'abcdefghijklm'.split('').map(function(el){
  return { name: `${el}` }
});


const alphabet2 = 'nopqrstuvwxyz'.split('').map(function(el){
  return { name: `${el}` }
});

  //const alphabet =[{name: 'a'},{name: 'b'},{name: 'c'}]

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Container buttons= { alphabet } />
        <Container buttons= { alphabet2 } />
        <MainGame />

        <p><Button name= "Start" /><Button name= "Restart" /></p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
