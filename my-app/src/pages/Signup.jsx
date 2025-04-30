import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");

  const provinces = [
    "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี",
    "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง",
    "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์",
    "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์",
    "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก",
    "เพชรบุรี", "เพชรบูรณ์", "แพร่", "พะเยา", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน",
    "ยะลา", "ยโสธร", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน",
    "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ", "สมุทรสงคราม", "สมุทรสาคร",
    "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์",
    "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อุดรธานี", "อุทัยธานี", "อุตรดิตถ์", "อุบลราชธานี",
    "อำนาจเจริญ"
  ];

  const handleSignup = async () => {
    if (username && email && password && gender && province) {
      try {
        const newUser = { username, email, password, gender, province };
        const response = await axios.post("http://localhost:5000/register", newUser);
        
        if (response.data.success) {
          alert("Signup successful!");
          navigate("/login");
        } else {
          alert(response.data.message || "Signup failed.");
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please fill all the fields.");
    }
  };


  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg overflow-hidden" style={{ width: "60rem", borderRadius: "40px" }}>
        <Row className="g-0">
          <Col md={6} className="position-relative d-none d-md-block">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
              style={{
                backgroundImage: "url('https://i.pinimg.com/736x/38/3b/23/383b2363e6af79fb2f063060f0daf2c1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
                padding: "20px",
                backdropFilter: "brightness(60%)",
              }}
            >
              <h4 className="fw-bold">Welcome to book lovers</h4>
              <p>Manage and borrow books effortlessly</p>
            </div>
          </Col>

          <Col md={6} className="p-5 bg-light">
            <h3 className="mb-4 fw-bold">Registration</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={username} onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check inline label="Male" name="gender" type="radio" value="Male" onChange={(e) => setGender(e.target.value)} />
                  <Form.Check inline label="Female" name="gender" type="radio" value="Female" onChange={(e) => setGender(e.target.value)} />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Provinces</Form.Label>
                <Form.Select value={province} onChange={(e) => setProvince(e.target.value)}>
                  <option value="">-- กรุณาเลือกจังหวัด --</option>
                  {provinces.map((prov, index) => (
                    <option key={index} value={prov}>
                      {prov}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={() => navigate("/login")}>
                  Cancel
                </Button>
                <Button variant="success" onClick={handleSignup}>
                  Confirm
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Signup;
