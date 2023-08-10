import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h3>This is terms</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam
        accusantium quo adipisci exercitationem sunt necessitatibus ratione
        voluptatibus autem. Vero consequuntur perspiciatis aliquid laborum
        delectus modi numquam maxime sapiente pariatur?
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
