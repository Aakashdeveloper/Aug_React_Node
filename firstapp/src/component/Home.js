import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';

import NewsList from './NewsList';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
           
        }
    }

    /*var a = [54,32,45,23,46]
    a.filter((data) => { return data>35})
    */
    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(userData) => {this.filterNews(userData)}}/>
                <NewsList newsdata={this.state.filtered} />
                <Footer year="2020" month="Aug"/>
            </React.Fragment>
        ) 
    }
    
}

export default Home;