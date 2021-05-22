import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getAllContacts } from '../../redux/contacts/';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error('ERROR');
    }
  };

  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const findName = name => {
      const normalizedName = name.toLowerCase();
      return contacts.find(
        contact => contact.name.toLowerCase() === normalizedName,
      );
    };

    const checkName = findName(name);

    if (checkName) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Type name"
          value={name}
          onChange={handleChange}
          autoFocus
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          placeholder="Type number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        Add contact
      </button>
    </form>
  );
}
