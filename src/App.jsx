import { useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'react-private-public-route';
import { Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { currentUser, getIsAuthenticated } from './redux/auth';
import AppBar from './components/AppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsAuthenticated);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div className="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />

          <PrivateRoute
            isAuthenticated={isLoggedIn}
            redirect={routes.login}
            path={routes.contacts}
            component={ContactsPage}
          />

          <PublicRoute
            restricted={isLoggedIn}
            redirect={routes.contacts}
            path={routes.login}
            component={LoginPage}
          />

          <PublicRoute
            restricted={isLoggedIn}
            redirect={routes.contacts}
            path={routes.register}
            component={RegisterPage}
          />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}
