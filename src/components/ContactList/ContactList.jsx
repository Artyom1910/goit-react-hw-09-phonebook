import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContact, deleteContact } from '../../redux/contacts';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContact);

  const deleteItem = contactId => dispatch(deleteContact(contactId));

  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
}
