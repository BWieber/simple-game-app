import React, { Component } from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends Component {
    state = {
        showGamesPlayed: true,
    };

    toggleGamesPlayedPanel = () => {
        this.setState(oldState => ({
            showGamesPlayed: !oldState.showGamesPlayed,
        }));
    };


    render() {
        const { showGamesPlayed } = this.state;
        const { users } = this.props;

        const gamesPlayedButton = (
            <div>
                <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
                    {showGamesPlayed ? 'Hide ' : 'Show '}
                    the Number of Games Played
                </button>
            </div>
        );

        return (
            <div>
                <p className="users">Users</p>
                {users && users.length > 0 ? gamesPlayedButton : ''}
        
                <ol className="user">
                    {users.map((user, index) => 
                    <User 
                        key={index} 
                        userName={user.userName} 
                        firstName={user.firstName} 
                        lastName={user.lastName}
                        gamesPlayed={user.gamesPlayed}
                        showGamesPlayed={showGamesPlayed}
                    />)
                }</ol>
            </div>
        )
    }
};

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserList;