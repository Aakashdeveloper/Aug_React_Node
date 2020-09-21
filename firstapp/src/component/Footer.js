import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>&copy; NareshIT {props.year} {props.month}</center>
        </React.Fragment>
    )
}

export default Footer;