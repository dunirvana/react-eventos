import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Linha from './Linha'

class App extends Component {

  render() {

  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <table>
            <thead>
              <td>Produto</td>
              <td>Quantidade</td>
              <td>?</td>
            </thead>
            <tbody>
              <Linha nome="Sapato" quantidade="100" mostrar="true"></Linha>
              <Linha nome="Camiseta" quantidade="80" mostrar="true"></Linha>
              <Linha nome="Calça" quantidade="110" mostrar="true"></Linha>

            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
