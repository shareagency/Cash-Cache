import React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <Card id="card-login">
              <CardTitle
                avatar="assets/images/cc_grade.png"
                title="Login or Sign Up"
              />
              <CardText>
                <Input type='text' label='Username' name='name' />
                <Input type='password' label='Password'  />
              </CardText>

              <CardActions>
                <Button label='Log In' raised primary />
                <Button label='Sign Up' raised primary />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
})
