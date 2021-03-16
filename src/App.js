import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import Header from "./features/Header";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
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
