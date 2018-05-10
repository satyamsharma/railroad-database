import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Reservation from './scenes/Reservation.js' 
import Schedule from './scenes/Schedule.js'
import Stations from './scenes/Stations.js'
import Home from './scenes/Home.js'
import Trains from './scenes/Trains.js'


class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/Reservation' component = {Reservation}/>
                <Route exact path = '/Schedule' component = {Schedule}/>
                <Route exact path = '/Stations' component = {Stations} />
                <Route exact path = '/Trains' component = {Trains} />
            </div>
        );
    }
}

export default Routes;