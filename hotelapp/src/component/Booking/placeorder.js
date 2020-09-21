import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const hotelUrl="https://developerfunnel.herokuapp.com/hotelsdetails"
const pBooking = "https://developerfunnel.herokuapp.com/placeBookin";

class PlaceBooking extends Component{
    constructor(props){
        super(props)

        this.state={
            order_id: Math.floor(Math.random()*10000),
            name:"",
            phone:"",
            address:"",
            hotel_name:'',
            person:''
        }
    }

    componentDidMount(){
        let hotelid = parseInt(this.props.match.params.id)
     
        axios.get(`${hotelUrl}/${hotelid}`)
        .then((response) => {this.setState({hotel_name:response.data[0].name})})
    }

    handleChangeName=(event) => {
        this.setState({name:event.target.value})
    }
    handleChangePhone=(event) => {
        this.setState({phone:event.target.value})
    }
    handleChangeAddress=(event) => {
        this.setState({address:event.target.value})
    }
    handleChangePerson=(event) => {
        this.setState({person:event.target.value})
    }

    handleSubmit=()=>{
        var data={
            "order_id":this.state.order_id,
            "name":this.state.name,
            "phone":this.state.phone,
            "address":this.state.address,
            "person":this.state.person,
            "hotel_name":this.state.hotel_name

        }
        fetch(pBooking,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/viewbooking')))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Place Booking</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id"
                            value={this.state.order_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">HotelName:</label>
                            <input type="text" name="hotel_name"
                            value={this.state.hotel_name} readOnly className="form-control"/>
                         
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name:</label>
                            <input type="text" name="name" onChange={this.handleChangeName}
                            value={this.state.name}className="form-control"/>
                         
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone:</label>
                            <input type="text" name="phone"
                            value={this.state.phone}  className="form-control"
                            onChange={this.handleChangePhone}/>
                         
                        </div>
                        <div className="form-group">
                            <label className="control-label">Address:</label>
                            <input type="text" name="address"
                            value={this.state.address}  className="form-control"
                            onChange={this.handleChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">How Many Person:</label>
                            <select name="person"  value={this.state.person}
                            className="form-control" onChange={this.handleChangePerson}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                           
                        </div>
                        <Link to={`/hotel/${this.props.match.params.id}`} className="btn btn-danger">
                                Cancel
                        </Link> &nbsp;
                        <button  className="btn btn-success" onClick={this.handleSubmit}>
                               Submit
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default PlaceBooking;