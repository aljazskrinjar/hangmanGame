import React, { Component } from 'react';
//import logo from './logo.svg';
import Container from './containers/Container'
import Button from './components/Button'
import MainGame from './MainGame'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <div><Button name= "Start" /><Button name= "Restart" /></div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
