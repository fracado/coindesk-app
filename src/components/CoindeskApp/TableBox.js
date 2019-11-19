import React from 'react';
import TableRow from './TableRow';
import '../App/App.css';


export default class TableBox extends React.Component {
  render() {
    let obj = this.props.rates;
    let array = [];

    for (let key in obj) {
      array.push({ key, value: obj[key] });
    }
    console.log(array);

    return (
      <div id='left'>
        {/* <table  className='table-container'> */}
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Date</th>
              <th>BPI Rate</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, i) => (
              <TableRow key={i} keyname={item.key} value={item.value} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
