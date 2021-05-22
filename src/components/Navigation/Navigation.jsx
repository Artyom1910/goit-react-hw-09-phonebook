import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth';
import styles from './Navigation.module.scss';

function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const location = useLocation();
  const history = useHistory();
  const refPageContacts = useRef(location.pathname);

  useEffect(() => {
    history.push(refPageContacts.current);
  }, [history]);

  return (
    <div>
      <NavLink
        exact
        className={styles.Navigation}
        activeStyle={{ color: 'orange' }}
        to={routes.home}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={styles.Navigation}
          activeStyle={{ color: 'orange' }}
          to={routes.contacts}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
export default Navigation;
