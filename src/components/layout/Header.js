import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo Manager</h1>
      <Link to="/Todo-List/" style={linkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/Todo-List/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
export default Header;
