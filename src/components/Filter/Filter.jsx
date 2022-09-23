import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ filterValue, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
