import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="Contacts">
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </div>
  );
}
