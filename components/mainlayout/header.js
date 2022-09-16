import React from "react";
import classes from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <h3 className={classes.text1}>Next JS Tutorial</h3>
      <h3 className={classes.text2}>
        <Link href="/">
          <a className={classes.link}> Browse all Images</a>
        </Link>
      </h3>
    </header>
  );
};

export default Header;
