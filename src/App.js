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
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: [],
          });
          console.log(result);
        });
    }
  }
  getRepos(type) {
    return(e) => {
      // Criando uma variavel para as infomações virem de maneira dinamica para cada usuario pesquisado
      const userName = this.state.userinfo.login

      // Por meio da interpolação chamamos a variavel criada acima
      ajax().get(`https://api.github.com/users/${userName}/${type}`)
      .then((result) => {
        this.setState({
          [type]:result.map((repo) =>{return{
            name: result[0].name,
            link:result[0].html_url
          }})
          
        })
      })
    }
  }
  // getStarred(){}
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        // tra zendo a propriedade do componente search, para fezer a requisição a api
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={ this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
