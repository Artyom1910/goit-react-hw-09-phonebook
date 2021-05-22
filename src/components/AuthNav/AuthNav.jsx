import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={styles.AuthNav}
        activeStyle={{ color: 'orange' }}
        to={routes.login}
      >
        Login
      </NavLink>

      <NavLink
        className={styles.AuthNav}
        activeStyle={{ color: 'orange' }}
        to={routes.register}
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
