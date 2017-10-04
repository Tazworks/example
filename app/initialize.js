import Admin from "./pages/admin";
import CostumeList from "./pages/costumeList";
import Firebase from "firebase";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

var config = {
  apiKey: "taz-costumes",
  authDomain: "taz-costumes.firebaseapp.com",
  databaseURL: "https://taz-costumes.firebaseio.com",
  storageBucket: "taz-costumes.appspot.com"
};

Firebase.initializeApp(config);

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin}/>
          <Route exact path="/" component={CostumeList}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  text: "testing props"
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App text="this"/>, document.getElementById("app-container"));
});