import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
function App() {
  return (
    // nav
    // routers
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    // footer
  );
}

export default App;
