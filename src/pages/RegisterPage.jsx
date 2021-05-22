import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth';
import styles from './pages.module.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error('ERROR');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.Page}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            Name
            <input
              autoComplete="off"
              className={styles.form__input}
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              autoFocus
            />
          </label>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>
            Email
            <input
              autoComplete="off"
              className={styles.form__input}
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            Password
            <input
              className={styles.form__input}
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className={styles.form__btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
