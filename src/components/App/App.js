import React, { Component } from 'react';
import './App.css';
import Table from '../CoindeskApp/Table';
import InfoBox from '../CoindeskApp/InfoBox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // calculate current date for fetch query
    let currentDay = function(sp) {
      let today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      return yyyy + sp + mm + sp + dd;
    };
    let enddate = currentDay('-');
    console.log(enddate);

    // calculate date 2 weeks ago for fetch query
    let twoWeeksAgo = function(sp) {
      let day = new Date(Date.now() - 12096e5);
      var dd = day.getDate();
      var mm = day.getMonth() + 1;
      var yyyy = day.getFullYear();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      return yyyy + sp + mm + sp + dd;
    };
    let startdate = twoWeeksAgo('-');
    console.log(startdate);

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
          {/* load Table component if data is not null */}
          {this.state.data !== null && <Table rates={this.state.data.bpi} />}
          <InfoBox />
        </header>
      </div>
    );
  }
}

export default App;
