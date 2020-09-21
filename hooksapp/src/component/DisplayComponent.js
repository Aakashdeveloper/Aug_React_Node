import React from 'react';

function DisplayCity(props){
    const renderList = ({mycity}) => {
        if(mycity){
            return mycity.map((item) => {
                return(
                    <div>
                        <h1>{item.city_name} | {item.country_name}</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>City List</h2>
            </center>
            {renderList(props)}
        </div>
    )

}


export default DisplayCity