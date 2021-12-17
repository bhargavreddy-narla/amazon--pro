import React, { useState } from "react";
import "./Signin.scss";
import { Link } from "react-router-dom";
import amazonlogo from "../Images/amazonlogo.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 signin">
          <Form onSubmit={handleSubmit} className="signin--Form">
            <img
              src={amazonlogo}
              alt="logo"
              style={{ width: "15rem", height: "15vh" }}
            />
            <Form.Group className="signin--Form--EmailData">
              <Form.Label className="signin--Form--Email">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="signin--Form--Emailinput"
              />
            </Form.Group>
            <Form.Group className="signin--Form--PasswordData">
              <Form.Label className="signin--Form--Password">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="signin--Form--Passwordinput"
              />
            </Form.Group>
            <Form.Group className="signin--Form--Checkdata">
              <input type="checkbox" className="signin--Form--Checkbox" />
              <span className="signin--Form--Checkboxdata">
                Forgot Password
              </span>
            </Form.Group>
            <Form.Group className="signin--Form--Buttons">
              <Button
                type="submit"
                name="submit"
                className="signin--Form--Loginbutton"
              >
                Login
              </Button>
              <span className="span">OR</span>
            </Form.Group>
          </Form>
          <div>
            <Link to="/createaccount">
              <Button
                type="submit"
                name="submit"
                className="signin--Form--Createbutton"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
