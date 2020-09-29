import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your email id is {this.state.user.email}</h2>
                    <h2>Your role is {this.state.user.role}</h2>
                </div>
                <button className="btn btn-danger">Logout</button>
            </div>

        )
    }
}
export default Profile;