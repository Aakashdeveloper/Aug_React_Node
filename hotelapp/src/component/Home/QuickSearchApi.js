import React,{Component} from 'react';
import QuickSearch from './QuickSearch';

var quickUrl = "https://developerfunnel.herokuapp.com/booking"

class QuickSearchAPI extends Component {
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }

    render(){
        return(
            <div>
                <QuickSearch tripData={this.state.tripType}/>
            </div>

        )
    }

    componentDidMount(){
        fetch(quickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }

}


export default QuickSearchAPI;