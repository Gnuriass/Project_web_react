import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  InputGroup,
} from "react-bootstrap";
import { books } from "../pages/Databooks";
import "../Navbar.css";
import ic from "../image/icon/ic.png";
import search from "../image/icon/search.png";
import us from "../image/icon/us.png";

function NavBarComponent() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // รายการหมวดหมู่ที่รองรับ
  const categoryLinks = {
    "off road": "/category/offroad",
    "off":"/category/offroad",
    "road":"/category/offroad",
    "grand prix": "/category/grandprix",
    "grand":"/category/grandprix",
    "prix":"/category/grandprix",
    การเงินธนาคาร: "/category/bank",
    การเงิน:"/category/bank",
    ธนาคาร:"/category/bank",
    เงิน:"/category/bank",
    บ้านและสวน: "/category/homegarden",
    บ้าน:"/category/homegarden",
    สวน:"/category/homegarden",
    ชีวจิต: "/category/biomind",
    ชีว:"/category/biomind",
    จิต:"/category/biomind",
  };

  // ตรวจสอบ Dark Mode จาก localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ฟังก์ชันจัดการการค้นหา
  const handleSearch = (e) => {
    e.preventDefault();
    const lowerQuery = query.toLowerCase().trim(); // แปลงเป็นตัวพิมพ์เล็กและตัดช่องว่าง

    // If query is empty, show a "Please enter a search query." message
    if (!lowerQuery) {
      navigate(`/search?query=${query}Notfound.`);
      return;
    }

    // 🔹 ถ้าค้นหาตรงกับหมวดหมู่
    if (categoryLinks[lowerQuery]) {
      navigate(categoryLinks[lowerQuery]);
      setQuery("");
      return;
    }

    // 🔹 ค้นหาหนังสือที่ตรงกับชื่อ
    const foundBook = books.find((book) =>
      book.title.toLowerCase().includes(lowerQuery)
    );

    if (foundBook) {
      navigate(`/book/${foundBook.id}`); // ไปยังหน้ารายละเอียดหนังสือ
    } else {
      navigate(`/search?query=${query}Notfound.`);
    }

    setQuery(""); // ล้างช่องค้นหา
  };

  return (
    <Navbar style={{ backgroundColor: "#D2B48C" }} expand="lg">
      <Container className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <img src={ic} alt="React Icon" width="50" height="50" className="me-2" />
          <Navbar.Brand className="ms-2">BooksLoop</Navbar.Brand>
        </div>

        <div className="d-flex align-items-center">
          <Form className="me-3" onSubmit={handleSearch}>
            <InputGroup
              style={{
                borderRadius: "50px",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <FormControl
                type="search"
                placeholder="SEARCH"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 15px",
                  color: "#333",
                }}
              />
              <InputGroup.Text
                onClick={handleSearch}
                style={{
                  backgroundColor: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 15px",
                }}
              >
                <img src={search} alt="Search Icon" width="30" height="30" />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          <Nav className="d-flex">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="Books" id="books-dropdown">
              <NavDropdown.Item as={Link} to="/category/offroad">Off Road</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/grandprix">Grand Prix</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/bank">การเงินธนาคาร</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/homegarden">บ้านและสวน</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/biomind">ชีวจิต</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </div>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-3">
            <span style={{ marginRight: "8px" }}>โหมดกลางคืน</span>
            <div
              onClick={toggleDarkMode}
              style={{
                width: "40px",
                height: "20px",
                backgroundColor: darkMode ? "#222" : "#fff",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                padding: "2px",
                cursor: "pointer",
                border: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: darkMode ? "#E6531A" : "#222",
                  borderRadius: "50%",
                  marginLeft: darkMode ? "auto" : "0",
                  transition: "0.3s",
                }}
              ></div>
            </div>
          </div>

          <NavDropdown
            title={<img src={us} alt="User Icon" width="40" height="40" />}
            id="user-dropdown"
            align="end"
            className="no-caret"
          > 
            <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
