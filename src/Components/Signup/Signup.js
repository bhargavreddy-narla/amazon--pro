import React, { useState } from "react";
import "./Signup.scss";
import amazonlogo from "../Images/amazonlogo.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(data);
    } else {
      console.log("password not matched");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Form onSubmit={handleSubmit} className="signup--Form">
            <img
              src={amazonlogo}
              alt="logo"
              style={{ width: "15rem", height: "15vh" }}
            />
            <Form.Group className="signup--Form--UsernameData">
              <Form.Label className="signup--Form--Username">
                USERNAME
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={changeHandler}
                required
                className="signup--Form--Usernameinput"
              />
            </Form.Group>
            <Form.Group className="signup--Form--EmailData">
              <Form.Label className="signup--Form--Email">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
                required
                className="signup--Form--Emailinput"
              />
            </Form.Group>
            <Form.Group className="signup--Form--PasswordData">
              <Form.Label className="signup--Form--Password">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
                required
                className="signup--Form--Passwordinput"
              />
            </Form.Group>
            <Form.Group className="signup--Form--PasswordData">
              <Form.Label className="signup--Form--Password">
                Confirm password
              </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
                required
                className="signup--Form--Passwordinput"
              />
            </Form.Group>
            <Button
              type="submit"
              name="submit"
              className="signup--Form--Button"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
