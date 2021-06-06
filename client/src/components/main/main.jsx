import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "../form/form";
import Profile from "../profile/profile";
import About from "../about/about";
import Support from "../support/support";
// import Home from "../home/home";
class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
          {/* <Route path="/" component={Home} /> */}
            <Route path="/form" component={Form} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}
export default Main;
