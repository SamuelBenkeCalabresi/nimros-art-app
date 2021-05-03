import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Drawer from "@material-ui/core/Drawer";

const Burger = () => {
  const [isToggled, setToggle] = useState(true);
  const [isOpen, setOpen] = useState(true);
  const drawerWidth = 240;

  const clickBurgerMenu = (isToggled) => {
    setToggle(!isToggled);
    console.log("CHECKECHECKCHECK");
    setOpen(!isOpen);
  };

  const first = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isToggled
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  return (
    <div>
      <svg
        onClick={() => clickBurgerMenu(isToggled)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
      <Drawer
        className={{ width: drawerWidth }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      ></Drawer>
    </div>
  );
};

export default Burger;
