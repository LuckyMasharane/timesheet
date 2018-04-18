import React, {Component} from 'react';
import img from '../images/Timesheet.png';
import {Grid, Col, Row, Form, FormControl,ControlLabel, FormGroup, Image, Label } from 'react-bootstrap';
import Button from '../elements/CustomButton/CustomButton';

class Home extends Component {

  render(){
    return(
        <Grid>
          <Row style={{paddingTop: 50}}>
            <Col md={5} mdOffset={3} lg={5} lgOffset={3}>
                <Image src={img} style={{height: 250, width: 'auto', margin: 'auto'}} /> <br/>
                <Form>
                    <FormGroup>
                        <FormControl style={{borderRadius: 30}} placeholder='Traineer Name' type = 'text'  onChange={(e)=>{this.setState({name: e.target.value})}}   required/>
                    </FormGroup>
                    <FormGroup>
                        <FormControl style={{borderRadius: 30}} placeholder='Traineer Surname' type = 'text' onChange={(e)=>{this.setState({surname: e.target.value})}}  required />
                    </FormGroup>
                    <FormGroup>
                        <FormControl style={{borderRadius: 30}} placeholder='Subject' type = 'text' onChange={(e)=>{this.setState({subject: e.target.value})}}  required />
                    </FormGroup>
                    <FormGroup>
                        <FormControl style={{borderRadius: 30}} placeholder='Vanue ' type = 'text' onChange={(e)=>{this.setState({vanue: e.target.value})}}  required />
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>Start time</ControlLabel>
                        <FormControl style={{borderRadius: 30}} type = 'time' onChange={(e)=>{this.setState({opentime: e.target.value})}}  required />
                    </FormGroup>
                    <FormGroup>
                    <ControlLabel>End time</ControlLabel>
                        <FormControl style={{borderRadius: 30}} type = 'time' onChange={(e)=>{this.setState({closetime: e.target.value})}}  required />
                    </FormGroup>
                    <Button bsStyle="success"  block fill round>Login</Button>
                
                </Form>
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default Home;
