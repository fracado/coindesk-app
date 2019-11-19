import React, { Component } from 'react';
import './InfoBox.css';

export default class InfoBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: null
    };
  }

  getCurrentPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json', {
      method: 'get',
      dataType: 'json'
    })
      .then(response => response.json())
      .then(result => {
        // add flash animation to current rate when data is fetched
        let animationBox = document.getElementById('animationBox')
        if (animationBox) {
          animationBox.classList.add('animated');
          animationBox.classList.add('flash');
          // remove flash so that it can be added/triggered again
          setTimeout(() => animationBox.classList.remove('flash'), 2500); 
        }
        this.setState({
          currentPrice: result.bpi.EUR.rate_float
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getCurrentPrice();
    this.refresh = setInterval(() => this.getCurrentPrice(), 10000); // update current rate
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  render() {
    return (
      <div id='right' className='currentPrice-container'>
        {this.state.currentPrice ? (    
        <div className='infobox'>
          <p>Current Rate:</p>
          <div id="animationBox">
            {this.state.currentPrice} €
          </div>
        </div>
        ) : null}
      </div>
    );
  }
}
