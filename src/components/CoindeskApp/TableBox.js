import React from 'react';
import TableRow from './TableRow';
import '../App/App.css';


export default class TableBox extends React.Component {
  render() {
    let obj = this.props.rates;
    let dataSet = [];

    for (let key in obj) {
      dataSet.push({ key, value: obj[key] });
    }

    return (
      <div id='left'>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Date</th>
              <th>BPI Rate</th>
            </tr>
          </thead>
          <tbody>
            {dataSet.map((item, i) => (
              <TableRow key={i} keyname={item.key} value={item.value} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
