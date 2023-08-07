import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Fear</p>
        <p>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Leatest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text..... I can be a React component, multiple React components, or
          just some text.....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
