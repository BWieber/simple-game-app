import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li className="user">
            <p>Username: {props.userName}</p>
            <p>Number of Games Played: {props.showGamesPlayed ? props.gamesPlayed : '*'}</p>
        </li>
    );
};

User.propTypes = {
    showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;
