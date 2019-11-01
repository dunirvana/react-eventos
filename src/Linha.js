import React, { Component } from 'react'

class Linha extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            nome: props.nome,
            quantidade: props.quantidade,
            mostrar: props.mostrar
        };

        this.remover = this.remover.bind(this);
      }
    
      remover(nome) {
        alert(nome + ' removido!');
        this.setState((state) => ({ 
          mostrar: !state.mostrar
        }));
      }

    render() {
        if(this.state.mostrar)
            return (
                    <tr>
                        <td>{this.state.nome}</td>
                        <td>{this.state.quantidade}</td>
                        <td> <input type="button" value="Remover!" onClick={(e) => this.remover(this.state.nome, e)} /> </td>
                    </tr>            
            );
        else
            return (
                <tr></tr>
            );
    }
}

export default Linha
