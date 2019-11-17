import React, { Component } from 'react';
import './App.css';
import Table from '../CoindeskApp/Table';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(
      'https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-11-01&end=2019-11-15',
      // 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json',
      {
        method: 'get',
        dataType: 'json'
      }
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          data: result
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          {this.state.data !== null && <Table rates={this.state.data.bpi} />}
          {/* <div>{this.state.data && Object.values(this.state.data.bpi)}</div> */}
          {/* <div>{this.state.data && this.state.data.bpi.EUR.rate}</div> */}
        </header>
      </div>
    );
  }
}

export default App;
