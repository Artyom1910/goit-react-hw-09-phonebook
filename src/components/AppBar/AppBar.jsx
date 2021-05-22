import { useSelector } from 'react-redux';
import { getLoadingUser } from '../../redux/auth';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getIsAuthenticated } from '../../redux/auth';
import styles from './AppBar.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const isLoading = useSelector(getLoadingUser);

  return (
    <div className={styles.AppBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : !isLoading ? <AuthNav /> : <p>AWAIT...</p>}
    </div>
  );
}
