import PropTypes from 'prop-types';
import { List, Item, Contact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button type="button" onClick={() => onClick(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
