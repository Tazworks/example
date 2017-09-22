import Admin from "./pages/admin";
import CostumeList from "./pages/costumeList";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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