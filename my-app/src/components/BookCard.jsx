
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={book.cover} alt={book.title} style={{ height: "325px" }} />
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: "1.2rem" }}>{book.title}</Card.Title>

        {/* ✅ ปุ่ม "ยืม" → ไปหน้า BookDetails ตาม ID */}
        <Button
          variant="primary"
          onClick={() => navigate(`/book/${book.id}`)}
          style={{ backgroundColor: "#CC6600" }} // ✅ ใช้ ID ของหนังสือ
        >
          อ่านเรื่องย่อ
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

