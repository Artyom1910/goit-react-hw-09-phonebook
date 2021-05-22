import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail, logout } from '../../redux/auth';
import styles from './UserMenu.module.scss';
import React from 'react';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.UserMenu}>
      <span className={styles.email}>Welcome, {email}</span>
      <button type="button" onClick={onLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
}
