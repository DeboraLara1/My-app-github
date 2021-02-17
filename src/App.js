import React, { Component } from 'react';
import AppContent from './compenents/AppContent';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }
  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    // Aqui fazemos o requerimento a api via ajax para ter acesso as informações
    if (keyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            // aqui estamos o resultado do ajax e trazendo todas as informções do usuario que precisamos
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              follwers: result.follwers,
              following: result.following,
            },
          });
          console.log(result);
        });
    }
  }
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        // trazendo a propriedade do componente search, para fezer a requisição a api
        handleSearch={(e) => this.handleSearch(e)}
      />
    );
  }
}

export default App;
