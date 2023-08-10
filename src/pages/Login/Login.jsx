import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/category/0";
  const handleLogin = (event) => {
    const form = event.target;
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    form.reset("");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const loogedUser = result.user;
        console.log(loogedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleLogin} className="w-50 mx-auto pt-5">
        <h3>Please Login</h3>
        <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
