import React from 'react';
import TableRow from './TableRow';

export default class Table extends React.Component {
  render() {
    let obj = this.props.rates;
    let array = [];

    for (let key in obj) {
      array.push({ key, value: obj[key] });
    }
    console.log(array);

    return (
      <table>
        <thead className='row'>
          <tr>
            <th className='col-sm 2'>Date</th>
            <th className='col-sm 2'>BPI Rate</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, i) => (
            <TableRow key={i} keyname={item.key} value={item.value} />
          ))}
        </tbody>
      </table>
    );
  }
}
