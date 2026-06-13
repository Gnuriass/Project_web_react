import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/home")
      if (response.data.success) {
        
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify({ email, password }));
        }
        ;
      } else {
        setError(response.data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="shadow-lg overflow-hidden"
        style={{ width: "60rem", borderRadius: "40px" }}
      >
        <Row className="g-0">
          <Col md={6} className="p-5 bg-light">
            <h3 className="mb-4 fw-bold">Login here.</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#996633", color: "white" }}
                variant="primary"
                className="w-100"
                onClick={handleLogin}
              >
                Login
              </Button>

              <div className="mt-3 text-center">
                Don't have an account?{" "}
                <Button variant="link" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </div>
            </Form>
          </Col>

          <Col md={6} className="position-relative d-none d-md-block">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/8d/42/66/8d42661e4c66ee7acd471b032a8d9661.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
                padding: "20px",
                backdropFilter: "brightness(60%)",
              }}
            >
              <h4 className="fw-bold">Welcome to the BookLoop</h4>
              <p>Manage and borrow books effortlessly</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
