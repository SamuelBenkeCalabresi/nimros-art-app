import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import Header from "./features/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul className="navigation_container">
            <li className="link">
              <Link to="/">home</Link>
            </li>
            <li className="link">
              <Link to="/about">about</Link>
            </li>
            <li className="link">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
