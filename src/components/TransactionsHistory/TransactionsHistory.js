import { PropTypes } from 'prop-types';
import {
  Table,
  TitleStyle,
  TableString,
  TableData,
} from './TransactionsHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TitleStyle>Type</TitleStyle>
          <TitleStyle>Amount</TitleStyle>
          <TitleStyle>Currency</TitleStyle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableString key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableString>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}
