import React, { Component } from 'react';
import {Input,Container} from '../styles/Reservation.style';
import {Grid,Paper, Button, Typography} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

class MyAccount extends Component {

    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "",
            password : "",
            preferred_card_number : "",
            preferred_billing_address : "",

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            expandTrainSchedule : !this.state.expandTrainSchedule,
        })
    }
    
    componentDidMount(){
        
        
    }

    render() {
        return (
            <Container>
                <Grid container justify="center" alignItems="center" spacing={16} style={{paddingBottom : '50px'}}>
                    <Grid container justify="center" alignItems="center" spacing={16}> 
                        <Grid item xs>
                            <Card>
                                <CardContent> 
                                    <Typography>{this.state.fname}</Typography> 
                                    <Typography>{this.state.lname}</Typography> 
                                    <Typography>{this.state.email}</Typography> 
                                    <Typography>{this.state.password}</Typography> 
                                    <Typography>{this.state.preffered_card_number}</Typography> 
                                    <Typography>{this.state.preffered_billing_number}</Typography> 
                                </CardContent>

                            </Card>
                              
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default MyAccount;
