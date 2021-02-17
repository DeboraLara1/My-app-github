import React, { Component } from 'react';
import AppContent from './compenents/AppContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        photo: 'https://avatars.githubusercontent.com/u/59708083?v=4',
        login: 'deboralara1',
        username: 'Debora Lara',
        repos: 12,
        follwers: 10,
        following: 10,
      },
      repos: [
        {
          name: 'Repo',
          link: '#',
        },
      ],
      starred: [
        {
          name: 'Repo',
          link: '#',
        },
      ],
    };
  }
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
