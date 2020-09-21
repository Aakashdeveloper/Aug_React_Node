import React,{Component} from 'react';
import axios from 'axios';
import BookingView from './bookingDisplay';

const burl = "";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingView bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(burl);
        this.setState({booking:response.data})
    }
}

export default Booking