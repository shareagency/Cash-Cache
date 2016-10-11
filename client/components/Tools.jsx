import React, { Component } from 'react';
import {Pie as PieChart} from 'react-chartjs-2';

export default class Tools extends Component {

  render() {

    return (
      <div>
        <PieChart data={{
          labels: ['Pennies', 'Nickels', 'Dimes', 'Quarters'],
          datasets: [{
            backgroundColor: [
              "#2ecc71",
              "#3498db",
              "#e74c3c",
              "#ffb600"
            ],
            data: [12, 19, 3, 17]
          }]
        }}  />
      </div>
    )
  }

}
