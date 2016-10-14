import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default class Info extends Component {

  render() {
    return (
      <Card>
        <CardText className="title">
          <h1>Start Saving Today!</h1>
        </CardText>
        <CardTitle
          className="bullet"
          avatar="assets/images/invest.jpg"
          title="Cash Cache is a smart piggy bank"
          subtitle="Teach children and teens become smart savers"
        />
        <CardTitle
          className="bullet"
          avatar="assets/images/goals.jpg"
          title="Visualize investment growth"
          subtitle="With dashbaord graphs"
        />
        <CardTitle
          className="bullet"
          avatar="assets/images/can.png"
          title="Helpful tips and tricks"
          subtitle="To get an edge on your finances"
        />
      </Card>
    )
  }

}
