import React, { Component } from 'react';

class AddUser extends Component {
    state = {
        fName: '',
        lName: '',
        userName: '',
    }

    handleUserName = event => {
        this.setState({ userName: event.target.value });
    };

    handleFirstName = event => {
        this.setState({ fName: event.target.value });
    };

    handleLastName = event => {
        this.setState({ lName: event.target.value });
    };

    addUser = (event) => {
        event.preventDefault();
        const { fName, lName, userName} = this.state;
        
        if(this.props.users.length === 0) {
            this.props.onAddUser(fName, lName, userName);
        } else {
            const userAlreadyExists = this.props.users.find((user) => user.userName === userName);

            if(userAlreadyExists) {
                alert('User Name already exists');
                return;
            }
            this.props.onAddUser(fName, lName, userName);
        }
    };

    inputIsEmpty = () => {
        const { fName, lName, userName } = this.state;

        const requiredFieldBlank = fName === '' || lName === '' || userName === '';

        return requiredFieldBlank;
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <label> 
                        User Name: 
                        <input type="text" value={this.state.userName} onChange={this.handleUserName} />
                    </label>

                    <label>
                        First Name:
                        <input type="text" value={this.state.fName} onChange={this.handleFirstName} />
                    </label>

                    <label>
                        Last Name
                        <input type="text" value={this.state.lName} onChange={this.handleLastName} />
                    </label>

                    <input type="submit" value="Submit" disabled={this.inputIsEmpty()} />
                </form>
        </div>
        )
    }
}

export default AddUser