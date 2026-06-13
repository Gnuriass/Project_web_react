import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { books } from "./Databooks";

//off road
import of1 from "../image/offroad/of1.png";
import of2 from "../image/offroad/of2.png";
import of3 from "../image/offroad/of3.png";
import of4 from "../image/offroad/of4.png";
import of5 from "../image/offroad/of5.png";
import of6 from "../image/offroad/of6.png";
import of7 from "../image/offroad/of7.png";
import of8 from "../image/offroad/of8.png";

//grand prix
import g1 from "../image/grandprix/g1.png";
import g2 from "../image/grandprix/g2.png";
import g3 from "../image/grandprix/g3.png";
import g4 from "../image/grandprix/g4.png";
import g5 from "../image/grandprix/g5.png";
import g6 from "../image/grandprix/g6.png";
import g7 from "../image/grandprix/g7.png";
import g8 from "../image/grandprix/g8.png";

//bank
import b1 from "../image/bank/b1.png";
import b2 from "../image/bank/b2.png";
import b3 from "../image/bank/b3.png";
import b4 from "../image/bank/b4.png";
import b5 from "../image/bank/b5.png";
import b6 from "../image/bank/b6.png";
import b7 from "../image/bank/b7.png";
import b8 from "../image/bank/b8.png";

//homegarden
import h1 from "../image/home/h1.png";
import h2 from "../image/home/h2.png";
import h3 from "../image/home/h3.png";
import h4 from "../image/home/h4.png";
import h5 from "../image/home/h5.png";
import h6 from "../image/home/h6.png";
import h7 from "../image/home/h7.png";
import h8 from "../image/home/h8.png";

//biomind
import bm1 from "../image/biomind/bm1.png";
import bm2 from "../image/biomind/bm2.png";
import bm3 from "../image/biomind/bm3.png";
import bm4 from "../image/biomind/bm4.png";
import bm5 from "../image/biomind/bm5.png";
import bm6 from "../image/biomind/bm6.png";
import bm7 from "../image/biomind/bm7.png";
import bm8 from "../image/biomind/bm8.png";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookImages = {
    //off road
    f1: of1,
    f2: of2,
    f3: of3,
    f4: of4,
    f5: of5,
    f6: of6,
    f7: of7,
    f8: of8,

    //grand prix
    g1: g1,
    g2: g2,
    g3: g3,
    g4: g4,
    g5: g5,
    g6: g6,
    g7: g7,
    g8: g8,

    //bank
    b1: b1,
    b2: b2,
    b3: b3,
    b4: b4,
    b5: b5,
    b6: b6,
    b7: b7,
    b8: b8,

    //homegarden
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    h7: h7,
    h8: h8,

    //biomind
    bm1: bm1,
    bm2: bm2,
    bm3: bm3,
    bm4: bm4,
    bm5: bm5,
    bm6: bm6,
    bm7: bm7,
    bm8: bm8,
  };

  // 🔹 ค้นหาหนังสือจาก ID ที่รับมา
  const book = books.find((b) => String(b.id) === id);

  // ถ้าไม่พบหนังสือ
  if (!book) {
    return (
      <Container className="mt-4">
        <h2>ไม่พบหนังสือ</h2>
        <Button
          variant="primary"
          onClick={() => navigate("/home")}
          style={{ backgroundColor: "#996633" }}
        >
          กลับไปหน้าหลัก
        </Button>
      </Container>
    );
  }

  // 🔹 ฟังก์ชันเปลี่ยนชื่อหมวดหมู่ให้ตรงกับลิงก์ใน NavDropdown
  const getCategoryLink = (category) => {
    const categoryLinks = {
      "Off Road": "/category/offroad",
      "Grand Prix": "/category/grandprix",
      การเงินธนาคาร: "/category/bank",
      บ้านและสวน: "/category/homegarden",
      ชีวจิต: "/category/biomind",
    };
    return categoryLinks[category] || "/category/other";
  };

  return (
    <Container
      className="mt-4 p-4 border rounded shadow"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="d-flex align-items-center"></div>
      <div style={{ color: "#000000" }}>
        <Row>
          {/* ✅ รูปหนังสือ */}
          <Col md={4} className="text-center">
            <img
              src={bookImages[book.id] || of1}
              alt={book.title}
              className="img-fluid rounded border"
              style={{ maxHeight: "300px" }}
            />
          </Col>

          {/* ✅ รายละเอียดหนังสือ */}
          <Col md={8}>
            <h2 className="fw-bold" style={{ color: "#CC6600" }}>
              {book.title}
            </h2>
            <hr className="my-2 border-warning" />
            <p>
              <strong>ผู้แต่ง:</strong> {book.author} <br />
              <strong>สำนักพิมพ์:</strong> {book.publisher}
            </p>

            <Row className="mb-3">
              <Col xs={6}>
                <p>
                  <strong>ขนาดไฟล์:</strong> {book.fileSize} <br />
                  <strong>รูปแบบไฟล์:</strong> {book.fileType} <br />
                  <strong>จำนวนหน้า:</strong> {book.pageCount} <br />
                  {/* ✅ ลิงค์ "ซื้อหนังสือ" */}
                </p>
              </Col>
            </Row>

            {/* ✅ ปุ่มหมวดหมู่ */}
            {book.category && book.category.length > 0 && (
              <div  className="mt-3 d-flex gap-3 flex-wrap">
                {book.category.map((cat, index) => (
                  <Button
                    key={index}
                    variant="outline-secondary"
                    className="text-white fw-bold"
                    onClick={() => navigate(getCategoryLink(cat))}
                    style={{ backgroundColor: "#A0522D", border: "none" }}
                  >
                    {cat}
                  </Button>
                ))}
                <a
                  href={book.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    
                    className="text-white fw-bold"
                  >
                    ซื้อหนังสือ
                  </Button>
                </a>
              </div>
            )}
          </Col>
        </Row>

        {/* ✅ เรื่องย่อด้านล่าง */}
        <Row className="mt-4">
          <Col>
            <h4 style={{ color: "#996633" }}>เรื่องย่อ</h4>
            <hr className="my-2 border-dark" />
            <p>{book.summary}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default BookDetails;
