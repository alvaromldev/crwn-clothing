import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
    </div>
  );
};

export default App;
