import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/header.component';
import SignInandUp from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
 
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // THIS IS OPEN SUBSCRIPTION
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState( {currentUser: user} );
    });
  }

  // CLOSING THE SUBSCRIPTION
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInandUp} />
          </Switch>
      </div>
    );
  }
}

export default App;
