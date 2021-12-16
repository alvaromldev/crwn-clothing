import { onSnapshot } from 'firebase/firestore';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header-component';
import { auth, createUser } from './firebase/firebase.utils';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './styles.scss';

export class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!!userAuth) {
        const userRef = await createUser(userAuth);

        onSnapshot(userRef, (snapshot) => {
          console.log(snapshot);
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}
