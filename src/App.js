import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import Header from "./features/Header";
import PostsContainer from "./features/PostsContainer";
import Creations from "./features/Creations";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/creations">
            <Header />
            <Creations />
          </Route>
          <Route path="/">
            <div className={styles.homeContainer}>
              <Header theme="light" />
              <Home />
            </div>
            <PostsContainer />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
