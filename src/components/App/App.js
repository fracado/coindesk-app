import React, { Component } from 'react';
import './App.css';
import TableBox from '../CoindeskApp/TableBox';
import InfoBox from '../CoindeskApp/InfoBox';
import { parseDate } from '../../helpers.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // get dates for fetch query
    let enddate = parseDate(Date.now());
    let startdate = parseDate(Date.now() - 12096e5); // date 14 days ago

    fetch(
      'https://api.coindesk.com/v1/bpi/historical/close.json?start=' +
        startdate +
        '&end=' +
        enddate +
        '&currency=EUR',
      {
        method: 'get',
        dataType: 'json'
      }
    )
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='heading'>
            <h1>Coindesk-App</h1>
            <h4>The last 2 weeks of Bitcoin rates and the current rate</h4>
          </div>
          <div className='content'>
            {/* load Table component if data is not null */}
            {this.state.data !== null && <TableBox rates={this.state.data.bpi} />}
            <InfoBox />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
