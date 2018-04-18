import React, {Component} from 'react';
import img from '../images/Timesheet.png';
import {Grid, Col, Row, Form, FormControl, FormGroup, Image, Label } from 'react-bootstrap';
import Button from '../elements/CustomButton/CustomButton';

class Login extends Component {


  render(){
    return(
        <Grid>
          <Row style={{paddingTop: 100}}>
            <Col md={5} mdOffset={3} lg={5} lgOffset={3}>
              <Image src={img} style={{height: 250, width: 'auto', margin: 'auto'}} /><br/>
                <h3 >
                  <Label >Login</Label><br/>
                </h3>
              <Form>
                <FormGroup>
                    <FormControl style={{borderRadius: 30}} placeholder='Email' type = 'email'  onChange={(e)=>{this.setState({email: e.target.value})}}   required/>
                </FormGroup>
                <FormGroup>
                    <FormControl style={{borderRadius: 30}} placeholder='Password' type = 'password' onChange={(e)=>{this.setState({password: e.target.value})}}  required />
                </FormGroup>
                <Button bsStyle="success"  block fill round>Login</Button>
              </Form>
              
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default Login;