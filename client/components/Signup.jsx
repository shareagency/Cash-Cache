import React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = { email: '', username: '', password: ''};
  }

  handleChange = (name, value) => {
   this.setState({...this.state, [name]: value});
  };

  handleSignUp = () => {;
    console.log('Emal:', this.state.email);
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <Card id="card-login">
              <CardTitle
                avatar="assets/images/cc_grade.png"
                title="Signup for our free service"
                subtitle="Required Fields *"
              />
              <CardText>
                <Input type='email' label='Email' name='name' required={true} ref='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                <Input type='text' label='Username' name='name' required={true} ref='username' value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                <Input type='password' label='Password' required={true} value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
              </CardText>

              <CardActions>
                <Button label='Sign Up' raised primary onMouseUp={this.handleSignUp.bind(this)}/>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

    )

  }
}
