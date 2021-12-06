import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, category,  amount) {
  return { id, date, name, shipTo, paymentMethod, category, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Kevin Womack',
    'Somewhere, Dubai',
    'VISA ⠀•••• 3719',
    'Concert Tickets',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Myles Carswell',
    'London, UK',
    'VISA ⠀•••• 2574',
    'Yeezys',
    966.99,
  ),
  createData(
      2, 
    '16 Mar, 2019',
    'Tom Scholz',
    'Atlanta, Ga',
    'MC ⠀•••• 1253',
    'Busy Bee\'s ',
      100.81),

  createData(
    3,
    '16 Mar, 2019',
    'Matthew Ruiters',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    'Off Whytes',
    6054.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Rosa Thomas',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    'Back to black Foundation',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
