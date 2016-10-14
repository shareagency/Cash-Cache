import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import {Tab, Tabs} from 'react-toolbox';
import { Card } from 'react-toolbox/lib/card';
import '../theme/About.scss';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      active: "",
      featured: "smart-pig"
    };
  }

  handleTabChange = (index) => {
    //console.log("INDEX", index);
    this.setState({index});
    switch(index) {
      case 0:
        this.setState({featured: "smart-pig"});
        break;
      case 1:
        this.setState({featured: "pie-chart"});
        break;
      case 2:
        this.setState({featured: "money"});
        break;
      default:
        this.setState({featured: "smart-pig"});
    }
  };

  render() {
    return (
      <div className="row">

        <Col md={6}>
          <br/>
          <Card>
            <Tabs index={this.state.index} onChange={this.handleTabChange}>
              <Tab className="tab-back-inactive" activeClassName="tab-back-active" label='Smart Piggy Bank'>
                <small className="about-tab">Cash Cache is a smart piggy bank with features and tools to help children and teens track and grow their savings. The Cash Cache app can be used with our unique coin collector designed to transmit and save your deposits directly to your FREE Cash Cache account. This straightforward application also allows for deposits to be manually added to you user account without the use of the optional coin collector.
                <br/><br/>Parents have found Cash Cache to be a useful tool for teaching their children lessons about the importance of having a consistent savings regimen. Cash Cache not only helps create a conducive environment for setting goals, but encourages further engagement through the visual representation of progress and achievements.
                <br/><br/>Our mission is to create valuable savings tools that are simple to use and easy to comprehend. Cash Cache is proud to make these tools free and accessible to any person that can benefit from them.
                </small>
              </Tab>
              <Tab className="tab-back-inactive" activeClassName="tab-back-active" label='Track Savings'>
                <small className="about-tab">Your Free Cash Cache account will equip you with the tools you need to become a smart and frequent saver.<br/><br/>Are you saving money for your college education? Or are you simply saving your allowance for a new video game? With Cash Cache you can easily set goals and watch as your deposits transform your aspirations into reality. This helpful application will keep you informed by calculating precisely how much money you have saved. Cash Cache will keep you motivated by displaying how close you are to reaching your savings goals.<br/><br/>Want to know exactly how many pennies, nickels, dimes, and quarters you have in your posession? This smart piggy bank is even intelligent enough to remember how many of each coin you have in your growing bankroll.<br/><br/>Like all animals, this piggy will get hungry. Be sure you feed him often!
                </small>
              </Tab>
              <Tab className="tab-back-inactive" activeClassName="tab-back-active" label='Tips About Saving'>
                <small className="about-tab">
                <span className="about-tips">Tip #1: Four Banks, Not One!</span><br/>Want a smart way to control your money? Use four little banks. Label each bank with the way you’ll use the money: SAVE, SPEND, INVEST, and GIVE.<br/><br/><strong>A spending bank</strong> for money to be used soon on everyday things. <br/><strong>A saving bank</strong> for money to be used later on larger items. <br/><strong>An investing bank</strong> for money that will be used several years from now. <br/><strong>A giving bank</strong> for gifts to help others.<br/><br/>
                <span className="about-tips">Tip #2: Set Savings Goals!</span><br/>How much should you save each month? That depends what you’re saving for. For example, you want to buy a new bike, but your parents say that you have to save $100 of the bike’s price before they will pay the rest. It can be tough to earn $100 in a short amount of time. That’s why money-smart kids have savings goals – and stick to them.<br/><br/>If you saved $25 each month ($6.25 a week) , you could buy that bike in four months! And if you saved $50 each month, you could buy that bike in two months! Sweet! The more you can save, the quicker you get the bike.<br/><br/>Money-smart kids who stick to their savings goals make things happen!<br/><br/>
                <span className="about-tips">Tip #3: Save First, Not Last!</span><br/>What’s the FIRST thing you do when you get paid? You divide your money and put it in your four banks. If you want that bike, you have to be sure that money goes into the SAVE bank FIRST. Talk to your parents about your plan. They might separate that SAVE money from your allowance, so that you can easily put it in the SAVE bank right away.<br/><br/>Here’s why putting your SAVE money into your bank first is important. Listen up! THIS IS A BIG RULE about money. You can spend it only once. Let’s say you use your SPEND money go to a movie. You have all of your allowance in your pocket, and you spend $5.50 of your SAVE money on pizza and soda. That money is gone. You can’t use it for your bike. Your dream of a bike just got farther away.<br/><br/>
                <span className="about-tips">Tip #4: Cut Your Expenses!</span><br/>Get a notebook that you use only to keep track of your money. Write down any money you spend. Try to keep a money journal. List what you bought, when you bought it, how much it cost, and why you bought the item. Your money diary will teach you something about yourself. For example, you may find that you spend $5 a week on snacks from vending machines at school. Are those snacks worth that money? Or would you rather save that money for something else? Don’t eat the snacks, and you get closer to buying the bike.<br/><br/>
                <span className="about-tips">Tip #5: Be a Smart Shopper!</span><br/>Okay, you’ve got some money and you’re ready to buy a DVD. You’ve saved that money, so make it work for you. Remember to shop smart! Check out prices. You can buy that DVD plenty of places. Figure out where you can get the best buy for your money. Look for sales and coupons. If you save a dollar, that means you can spend it on something else. Or add it to your SAVE bank for your bike.<br/><br/>
                </small>
              </Tab>
            </Tabs>
          </Card>
        </Col>

        <Col md={6}>
          <div className="about-img">
            <div className={this.state.featured}></div>
          </div>
        </Col>

      </div>
    )
  }

}
