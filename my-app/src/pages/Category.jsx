import React from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import { Container, Row, Col } from "react-bootstrap";

// หมวดหมู่ไอคอน
import book from "../image/icon/book.png"
import car from "../image/icon/car.png";
import scar from "../image/icon/scar.png";
import bank from "../image/icon/bank.png";
import home from "../image/icon/home.png";
import mind from "../image/icon/mind.png"

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
import bm1 from "../image/biomind/bm1.png"
import bm2 from "../image/biomind/bm2.png"
import bm3 from "../image/biomind/bm3.png"
import bm4 from "../image/biomind/bm4.png"
import bm5 from "../image/biomind/bm5.png"
import bm6 from "../image/biomind/bm6.png"
import bm7 from "../image/biomind/bm7.png"
import bm8 from "../image/biomind/bm8.png"

function splitWords(text) {
  if (!text) return ""; // ป้องกัน error ถ้า text เป็น undefined

  const specialCases = {
    offroad: "Off Road",
    grandprix: "Grand Prix",
  };

  if (specialCases[text.toLowerCase()]) {
    return specialCases[text.toLowerCase()];
  }

  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → "camel Case"
    .replace(/[-_]/g, " ") // kebab-case & snake_case → "kebab case"
    .replace(/\b\w/g, (char) => char.toUpperCase()); // ทำตัวแรกของแต่ละคำเป็นตัวใหญ่
}

function Category() {
  const { type } = useParams();

  // 📌 หมวดหมู่หนังสือ
  const booksByCategory = {
    //off road
    offroad: [
      { id: "f1", title: "Off Road No. 353", queue: 0, cover: of1 },
      { id: "f2", title: "Off Road No. 352", queue: 0, cover: of2 },
      { id: "f3", title: "Off Road No. 351", queue: 0, cover: of3 },
      { id: "f4", title: "Off Road No. 350", queue: 0, cover: of4 },
      { id: "f5", title: "Off Road No. 349", queue: 0, cover: of5 },
      { id: "f6", title: "Off Road No. 348", queue: 0, cover: of6 },
      { id: "f7", title: "Off Road No. 347", queue: 0, cover: of7 },
      { id: "f8", title: "Off Road No. 346", queue: 0, cover: of8 }
    ],
        //grand prix
    grandprix: [
      { id: "g1", title: "Grand Prix No. 662", queue: 0, cover: g1 },
      { id: "g2", title: "Grand Prix No. 661", queue: 0, cover: g2 },
      { id: "g3", title: "Grand Prix No. 660", queue: 0, cover: g3 },
      { id: "g4", title: "Grand Prix No. 659", queue: 0, cover: g4 },
      { id: "g5", title: "Grand Prix No. 658", queue: 0, cover: g5 },
      { id: "g6", title: "Grand Prix No. 657", queue: 0, cover: g6 },
      { id: "g7", title: "Grand Prix No. 656", queue: 0, cover: g7 },
      { id: "g8", title: "Grand Prix No. 655", queue: 0, cover: g8 }
    ],
    //bank
    bank: [
      { id: "b1", title: "การเงินธนาคาร มีนาคม 2568", queue: 0, cover: b1 },
      { id: "b2", title: "การเงินธนาคาร กุมภาพันธ์ 2568", queue: 0, cover: b2 },
      { id: "b3", title: "การเงินธนาคาร มกราคม 2568", queue: 0, cover: b3 },
      { id: "b4", title: "การเงินธนาคาร ธันวาคม 2567", queue: 0, cover: b4 },
      { id: "b5", title: "การเงินธนาคาร พฤศจิกายน 2567", queue: 0, cover: b5 },
      { id: "b6", title: "การเงินธนาคาร ตุลาคม 2567", queue: 0, cover: b6 },
      { id: "b7", title: "การเงินธนาคาร กันยายน 2567", queue: 0, cover: b7 },
      { id: "b8", title: "การเงินธนาคาร สิงหาคม 2567", queue: 0, cover: b8 }
    ],
    //homegarden
    homegarden: [
      { id: "h1", title: "บ้านและสวน มีนาคม 2568", queue: 0, cover: h1 },
      { id: "h2", title: "บ้านและสวน กุมภาพันธ์ 2568", queue: 0, cover: h2 },
      { id: "h3", title: "บ้านและสวน มกราคม 2568", queue: 0, cover: h3 },
      { id: "h4", title: "บ้านและสวน ธันวาคม 2567", queue: 0, cover: h4 },
      { id: "h5", title: "บ้านและสวน พฤศจิกายน 2567", queue: 0, cover: h5 },
      { id: "h6", title: "บ้านและสวน ตุลาคม 2567", queue: 0, cover: h6 },
      { id: "h7", title: "บ้านและสวน กันยายน 2567", queue: 0, cover: h7 },
      { id: "h8", title: "บ้านและสวน สิงหาคม 2567", queue: 0, cover: h8 }
    ],
    //biomind
    biomind: [
      { id: "bm1", title: "ชีวจิต กุมภาพันธ์ - มีนาคม 2568", queue: 0, cover: bm1 },
      { id: "bm2", title: "ชีวจิต ธันวาคม 2567", queue: 0, cover: bm2 },
      { id: "bm3", title: "ชีวจิต พฤศจิกายน 2567", queue: 0, cover: bm3 },
      { id: "bm4", title: "ชีวจิต ตุลาคม 2567", queue: 0, cover: bm4 },
      { id: "bm5", title: "ชีวจิต กันยายน 2567", queue: 0, cover: bm5 },
      { id: "bm6", title: "ชีวจิต สิงหาคม 2567", queue: 0, cover: bm6 },
      { id: "bm7", title: "ชีวจิต กรกฎาคม 2567", queue: 0, cover: bm7 },
      { id: "bm8", title: "ชีวจิต มกราคม 2567", queue: 0, cover: bm8 }
    ],
  };

  // 📌 ตรวจสอบว่าหมวดหมู่มีข้อมูลหรือไม่
  const books = booksByCategory[type] || [];

  // 📌 กำหนดไอคอนตามหมวดหมู่
  const categoryIcons = {
    offroad: car,
    grandprix: scar,
    bank: bank,
    homegarden: home,
    biomind: mind
  };
  
  // 📌 แปลงชื่อหมวดหมู่เป็นภาษาไทย
  const categoryNames = {
    bank: "การเงินธนาคาร",
    homegarden: "บ้านและสวน",
    biomind: "ชีวจิต"
  };
  
  // ✅ ดึงชื่อหมวดหมู่ภาษาไทย ถ้าไม่พบ ให้ใช้ชื่อ type เดิม
  const categoryName = categoryNames[type] || splitWords(type);
  
  // ✅ เลือกไอคอน ถ้าไม่มี ให้ใช้ไอคอนเริ่มต้น
  const categoryIcon = categoryIcons[type] || book;
  
  return (
    <Container className="mt-4">
      <h2>
        <img
          src={categoryIcon}
          alt="Category Icon"
          width="50"
          height="50"
          className="me-2"
        />
        {categoryName}
      </h2>
      {books.length > 0 ? (
        <Row>
          {books.map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>ไม่มีหนังสือในหมวดหมู่นี้</p>
      )}
    </Container>
  );
}

export default Category;
