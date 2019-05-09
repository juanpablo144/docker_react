import React, { Component } from 'react';

class User extends Component {
 
    constructor(){
        super();
        this.state = {
            name : ''
        }

        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addUser(ev){
        fetch('http://localhost:9000/createUser',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.error(err)); 

    }

    handleChange(ev){
       const {name, value} =  ev.target;
       this.setState({
           [name]: value 
       });
    }
 
    render() {
        return (
            <div>
                <form method="POST" onSubmit={this.addUser}>
                    <input placeholder="User name" name="name" onChange={this.handleChange}></input>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default User;