import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, createUserProfileDocumement } from "./firebase/firebase.utils";
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumement(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });

        setCurrentUser(userAuth);
      }

      // this.setState({currentUser: user});
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
};

 const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
