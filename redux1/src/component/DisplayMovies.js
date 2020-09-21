import React from 'react';

const DisplayMovies = (props) => {

    const renderView = ({datalist}) =>{
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div key={index}>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h1>Movies List</h1>
            {renderView(props)}
        </div>
    )
}

export default DisplayMovies