import React, { Component } from 'react';

export default class InfoBox extends Component {
  constructor(props) {
    super(props);

    this.getCurrentPrice = this.getCurrentPrice.bind(this);

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
        console.log(result);
        this.setState({
          currentPrice: result.bpi.EUR.rate_float
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.currentPrice);
  }

  componentDidMount() {
    this.getCurrentPrice();
    this.refresh = setInterval(() => this.getCurrentPrice(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  render() {
    return (
      <div className='currentPrice-container'>
        {this.state.currentPrice ? (
          <div className='infobox'>{this.state.currentPrice}</div>
        ) : null}
      </div>
    );
  }
}
