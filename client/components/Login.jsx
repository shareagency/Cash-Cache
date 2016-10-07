import React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: '', password: ''};
  }

  handleChange = (name, value) => {
   this.setState({...this.state, [name]: value});
  };

  handleLogin = () => {;
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  };

  handleSignUp = () => {;
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
                title="Login or Sign Up"
                subtitle="Required Fields *"
              />
              <CardText>
                <Input type='text' label='Username' name='name' required={true} ref='username' value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                <Input type='password' label='Password' required={true} value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
              </CardText>

              <CardActions>
                <Button label='Log In' raised primary onMouseUp={this.handleLogin.bind(this)}/>
                <Button label='Sign Up' raised primary onMouseUp={this.handleSignUp.bind(this)}/>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

    )

  }
}
