import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  state = {
    users: [],
  };

  handleAddUser = (first, last, user) => {
    const userObject = {firstName: first, lastName: last, userName: user, gamesPlayed: 0, showGamesPlayed: true}

    this.setState(prevState => ({ users: [...prevState.users, userObject ]}));
    };

  render() {
    return (
      <div className="App">
        <h1> Game App </h1>

        <AddUser onAddUser={this.handleAddUser} users={this.state.users} />
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
