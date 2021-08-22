import React, { useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import ScrollToTop from "./features/ScrollToTop";
import Bookings from "./features/Bookings";
// import Header from "./features/Header";
import PostsContainer from "./features/PostsContainer";
import Creations from "./features/Creations";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CreateIcon from "@material-ui/icons/Create";
import TodayIcon from "@material-ui/icons/Today";
import EmailIcon from "@material-ui/icons/Email";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/drawer">
            <Header />
          </Route>
          <Route path="/creations">
            <Header />
            <Creations />
          </Route>
          <Route path="/bookings">
            <Header />
            <Bookings />
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

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link
        to={props.to}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem to={"/creations"} leftIcon={<CreateIcon />}>
            Creazioni
          </DropdownItem>
          <DropdownItem to={"/bookings"} leftIcon={<TodayIcon />}>
            Prenotazioni
          </DropdownItem>
          <DropdownItem leftIcon={"😉"} goToMenu="settings">
            Scopri Tutto
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowBackIosOutlinedIcon />} goToMenu="main">
            Menu Principale
          </DropdownItem>
          <DropdownItem to={"/creations"} leftIcon={<CreateIcon />}>
            Creazioni
          </DropdownItem>
          <DropdownItem to={"/bookings"} leftIcon={<TodayIcon />}>
            Prenotazioni
          </DropdownItem>
          <DropdownItem to={"/about"} leftIcon={<AccountCircleIcon />}>
            Su di me
          </DropdownItem>
          <DropdownItem to={"/contact"} leftIcon={<EmailIcon />}>
            Contatti
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Header(props) {
  return (
    <Navbar>
      <div className={styles.titleContainer}>
        {props.theme === "light" ? (
          <Link to="/">
            <h1 className={`${styles.title} ${styles.light}`}>Nimros.art</h1>
          </Link>
        ) : (
          <Link to="/">
            <h1 className={styles.title}>Nimros.art</h1>
          </Link>
        )}
      </div>
      <div className={styles.navbarContainer}>
        <NavItem to={"/"} icon={<HomeIcon />} />
        <NavItem to={"/about"} icon={<AccountCircleIcon />} />
        {/* Dropdown */}
        <NavItem icon={<MenuRoundedIcon />} openIcon={<MenuOpenRoundedIcon />}>
          <DropdownMenu />
        </NavItem>
      </div>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const iconToDisplay = !open
    ? props.icon
    : !props.openIcon
    ? props.icon
    : props.openIcon;

  return (
    <li className="nav-item">
      <Link
        to={props.to}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {iconToDisplay}
      </Link>
      {/* if clicked the icon then we want to show the dropdown */}
      {open && props.children}
    </li>
  );
}
export default App;
