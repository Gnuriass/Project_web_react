import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import ib from "../image/icon/book.png";
import h7 from "../image/home/h7.png";
import bm4 from "../image/biomind/bm4.png";
import g3 from "../image/grandprix/g3.png";
import b5 from "../image/bank/b5.png";
import b8 from "../image/bank/b8.png";
import bm8 from "../image/biomind/bm8.png";
import h3 from "../image/home/h3.png";
import g6 from "../image/grandprix/g6.png";
import BookCard from "../components/BookCard";

function Home() {
  //const navigate = useNavigate();
  const books = [
    { id: "h7", title: "บ้านและสวน กันยายน 2567", cover: h7 },
    { id: "bm4", title: "ชีวจิต ตุลาคม 2567", cover: bm4 },
    { id: "g3", title: "Grand Prix No. 660", cover: g3 },
    { id: "b5", title: "การเงินธนาคาร พฤศจิกายน 2567", cover: b5 },
    { id: "b8", title: "การเงินธนาคาร สิงหาคม 2567", cover: b8 },
    { id: "bm8", title: "ชีวจิต มกราคม 2567", cover: bm8 },
    { id: "h3", title: "บ้านและสวน มกราคม 2568", cover: h3 },
    { id: "g6", title: "Grand Prix No. 657", cover: g6 },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">
        <img
          src={ib}
          alt="React Icon"
          width="50"
          height="50"
          className="me-2"
        />
        หนังสือยอดนิยม
      </h2>

      <Row>
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
