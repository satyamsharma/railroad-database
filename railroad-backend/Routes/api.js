/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../Controller/apiHome');
const stations = require('../Controller/stations');
const authpassengers = require('../Controller/auth/passenger')
const passengers = require('../Controller/passenger');
const calculateReservation = require('../Controller/reservation/calculateReservation');
const createReservation = require('../Controller/reservation/createReservation');
const trains = require('../Controller/trains');
const findTrains = require('../Controller/reservation/findTrains');

router.get('/', apiHome.getApi);

router.get('/stations', stations.getStations);
router.get('/trains', trains.getTrains);

router.post('/auth/registerPassenger',authpassengers.registerPassenger);
router.post('/auth/loginPassenger',authpassengers.loginPassenger);

router.post('/passengers/api_key', passengers.getPassengerByApikey);

router.post('/reservation/calculateReservation' , calculateReservation.calculateReservation);
router.post('/reservation/createReservation', createReservation.createReservation)

router.post('/reservation/findTrains' , findTrains.findTrains);
router.use(apiHome.invalidPath);
module.exports = router;
