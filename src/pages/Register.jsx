import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Register = ( {setUser} ) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://food-api-ivzo.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setUser(user);
          navigate("/login");
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
                      <label htmlFor="firstName">First Name</label>
                      <br />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <label htmlFor="lastName">Last Name</label>
                      <br />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                    <button type="submit" className="addTOCart__btn">
                      Sign Up
                    </button>
                  </form>
                  <Link to="/login">Already have an account? Login</Link>
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
