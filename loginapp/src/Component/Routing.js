import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import RegisterComponent  from './RegisterComponenet';
import LoginComponent from './LoginComponent';
import UserList from './UserList';
import Profile from './Profile';


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/list" component={UserList}/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;