import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import { GlobalStyle } from './global.styles';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop/*' element={<ShopPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route
              path='/signin'
              element={
                !!currentUser ? (
                  <Navigate to='/' replace />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
