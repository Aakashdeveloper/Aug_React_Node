import React,{Component} from 'react';
import axios from 'axios';

const curl = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component{
    costFilter = (event) => {
        let cost = (event.target.value).split(',');
        let hcost = Number(cost[1])
        let lcost = Number(cost[0])
        let tripType =  sessionStorage.getItem('tripid')
        let ccurl ;
        if(event.target.value==" "||event.target.value==""){
            ccurl = `${curl}/${tripType}`
            console.log('ccurl>>>',ccurl)
        }else{
            ccurl=`${curl}/${tripType}?hcost=${hcost}&lcost=${lcost}`
            console.log('ccurl>>>',ccurl)
        }
        axios.get(ccurl)
        .then((response) => {this.props.costperType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Filter</center>
                <div onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="room"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,16000" name="room"/>6001-16000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;