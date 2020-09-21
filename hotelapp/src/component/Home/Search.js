import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} |  {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity =(event) =>{
        console.log(event.target.value)
        fetch(`${hurl}${event.target.value}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) =>{
            this.setState({hotels:data})
        })
    }

    handleRestaurent = (event) => {
        this.props.hid(Number(event.target.value))
    }
    
    render(){
        return(
            <header>
                <div className="imageContainer">
                    <div id="logo">
                        <b>D!</b>
                    </div>
                    <div className="heading">
                        Plan Your Trip With Us.
                    </div>
                    <div className="locationSelector">
                        <select onChange={this.handleCity} style={{height:50}}>
                        <option>--------Select City------</option>
                        {this.renderCity(this.state.location)}
                        </select>
                        <select id="restaurent" style={{height:50}}
                        onChange={this.handleRestaurent}>
                        <option>--------Select Hotel------</option>
                        {this.renderHotel(this.state.hotels)}
                        </select>
                    </div>
                </div>
                <hr/>
            </header>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search;