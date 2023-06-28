// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useAuth } from "./auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { login } = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://group-4-book-a-meal-api.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            },
          }),
        }
      );

      if (response.ok) {
        const { user, jwt } = await response.json();
        localStorage.setItem("token", jwt);
        login(user);
        navigate(redirectPath, { replace: true });
      } else {
        const errorData = await response.json();
        setErrors(errorData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Login">
        <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
          <CommonSection title="Login" />

          <section>
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12" className="m-auto text-center">
                  <form className="form mb-5" onSubmit={handleSubmit}>
                    <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                      Login
                    </h1>
                    <div className="form__group">
                      <label htmlFor="username">Username</label>
                      <br />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button className="addTOCart__btn">Login</button>
                  </form>
                  <Link to="/register">
                    Don't have an account? Create an account
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Helmet>
    </>
  );
};

export default Login;
