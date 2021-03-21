import "./App.css";
import Browse from "./pages/Browse";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Router path="/browse">
          <Browse />
        </Router>
        <Router path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
