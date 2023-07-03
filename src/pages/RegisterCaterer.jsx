import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Register = ({ setCaterer }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState(""); // New state variable

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://group-4-book-a-meal-api.onrender.com/api/v1/caterers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caterer: {
          username: username,
          email: email,
          business_name: business_name,
          password: password,
          password_confirmation: passwordConfirmation
        } // Include password_confirmation field
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          setCaterer(data.caterer);
          navigate("/login_caterer");
        });
      }
    });
  }

  return (
    <>
      <Helmet title="Signup">
        <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
          <CommonSection title="Signup" />

          <section>
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12" className="m-auto text-center">
                  <form className="form mb-5" onSubmit={handleSubmit}>
                    <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                      Sign Up
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
                      <label htmlFor="email">Email</label>
                      <br />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="bussiness_name">Bussines Name</label>
                      <br />
                      <input
                        type="bussiness_name"
                        value={business_name}
                        onChange={(e) => setBusiness_name(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="passwordConfirmation">Confirm Password</label>
                      <br />
                      <input
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                    <button type="submit" className="addTOCart__btn">
                      Sign Up
                    </button>
                  </form>
                  <Link to="/login_caterer">Already have an account? Login</Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Helmet>
    </>
  );
};

export default Register;
