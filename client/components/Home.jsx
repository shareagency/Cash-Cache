import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
      <div className="charting">

        <div>
          <img className="chart-pic" src="assets/images/chart.png" />
        </div>

        <div className="row">
          <div className="col-md-4 col-pad">
            <div className="home-img-wrap">
              <p className="home-img-title">Achieve Your Goals</p>
              <img className="home-img" src="assets/images/goals.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-pad">
            <div className="home-img-wrap">
              <p className="home-img-title">Stay Motivated</p>
              <img className="home-img" src="assets/images/motivated.jpg" />
            </div>
          </div>
          <div className="col-md-4 col-pad">
            <div className="home-img-wrap">
              <p className="home-img-title">Grow Your Savings</p>
              <img className="home-img" src="assets/images/invest.jpg" />
            </div>
          </div>
        </div>

      </div>

      <img className="piggy" src="assets/images/piggy.png" />

      <img className="graph-foot" src="assets/images/graph_grade2.png" />
      </div>
    )
  }
})
