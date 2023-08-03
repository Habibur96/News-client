import React from "react";
import { Button } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h5 className="mt-4">Login Now</h5>
      <Button className="mb-2" variant="success">
        <FaGoogle /> <></>
        Login with google
      </Button>
      <Button variant="success">
        <FaGithub /> <></> Login with github
      </Button>

      <div className="my-2">
        <h5>Find Us On</h5>
        <Button variant="info" size="lg" active>
          <FaFacebook></FaFacebook> <></>
          Facebook
        </Button>
        <br /> <br />
        <Button variant="info" size="lg" active>
          <FaTwitter></FaTwitter> <></>
          Twitter
        </Button>
        <br /> <br />
        <Button variant="info" size="lg" active>
          <FaInstagram></FaInstagram> <></>
          Instagram
        </Button>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
