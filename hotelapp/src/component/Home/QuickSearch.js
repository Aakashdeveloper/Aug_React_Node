import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {

    const listTrip = ({tripData}) => {
        if(tripData){
            return tripData.map((item) => {
                return(
                    <Link to={`/details/${item.trip}`}>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src={item.image} />
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading">
                                {item.name}
                            </div>
                            <div className="componentSubHeading">
                                Start your day with exclusive {item.name} option
                            </div>
                        </div>

                    </div>
                </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeding">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeding">
                    Discover Trip by type
                </p>
                <br/>
                {listTrip(props)}
            </div> 
        </div>
    )
}

export default QuickSearch;