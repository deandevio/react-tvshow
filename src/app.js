import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Singlepage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage}>
            <Homepage />
          </Route>
          <Route exact path="/about" component={Aboutpage}>
            <Aboutpage />
          </Route>
          <Route exact path="/singleshow/:id" component={Singlepage}>
            <Singlepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
