import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = `https://developerfunnel.herokuapp.com/hotelsdetails`

class HotelDetails extends Component{
    constructor(){
        super()

        this.state={
            hotel:{
                "type": [
                    {
                      "name": ""
                    },
                    {
                      "name": ""
                    },
                    {
                      "name": ""
                    }
                  ],
            },
            tripid: sessionStorage.getItem('tripid')
        }
    }

    render(){
        console.log(this.state.hotel)
        var {hotel} = this.state
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>{hotel.name}</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={hotel.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{hotel.name}</h3>
                                <h3>{hotel.locality}</h3>
                                <h3>{hotel.address}</h3>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab><span className="overview">Overview</span></Tab>
                                <Tab><span className="contact">Contact</span></Tab>
                                <Tab><span className="overview">Aminities</span></Tab>
                            </TabList>
                            <div className="container">
                            <TabPanel>
                                <div>
                                    <div className="about">About this place</div>
                                    <br/>
                                    <div>Type</div>
                                    <div>{hotel.type[0].name} | {hotel.type[1].name} | {hotel.type[2].name}</div>
                                    <div>Cost Per Night</div>
                                    <div>Rs. {hotel.cost}</div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                        <div>Phone Number</div>
                                        <div>6868553576</div>
                                        <div>{hotel.locality}</div>
                                        <div>{hotel.city_name}</div>
                                    </div>
                            </TabPanel>
                            <br/>
                            <Link to={`/details/${this.state.tripid}`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;
                            <Link to={`/booking/${this.props.match.params.id}`} className="btn btn-success ">
                                Place Booking
                            </Link>
                            </div>
                        </Tabs>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount(){
        let hotelid = parseInt(this.props.match.params.id)
     
        axios.get(`${url}/${hotelid}`)
        .then((response) => {this.setState({hotel:response.data[0]})})
    }
}


export default HotelDetails;
