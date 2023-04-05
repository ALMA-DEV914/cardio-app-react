import React from "react";
import { Link } from "react-router-dom";
import { Stack, Container } from "@mui/material";
import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <div className="container">
      <Container className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Exercises
          </a>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
