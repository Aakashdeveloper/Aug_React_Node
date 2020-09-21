import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomfilter';
import CostFilter from '../filters/costfilter';

const url = "https://developerfunnel.herokuapp.com/hotellist/"

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter(sortedData){
        this.setState({hotellist:sortedData})
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roompertype={(data)=>{this.setDataPerFilter(data)}}/>
                        <CostFilter costperType={(data) =>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restdata={this.state.hotellist}/>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('tripid',this.props.match.params.id)
        axios.get(`${url}${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}


export default Details