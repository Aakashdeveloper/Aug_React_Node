import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import ListingApi from './hotellisting/listingApi';
import HotelDetails from './hotelDetails/hotelDetail';
import PlaceOrder from './Booking/placeorder';
import Booking from './Booking/booking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/details/:id" component={ListingApi}/>
                <Route path="/hotel/:id" component={HotelDetails}/>
                <Route path="/booking/:id" component={PlaceOrder}/>
                <Route path="/viewbooking/" component={Booking}/>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default Routing;