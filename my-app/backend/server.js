require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// ✅ สร้าง Connection กับ MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'booksloop'
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});


app.get('/user', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
  });
});
// 📌 **ลงทะเบียน (Register)**
app.post("/register", (req, res) => {
  const { username, email, password, gender, province} = req.body;
  console.log(req.body)

  if (!username || !email || !password || !gender || !province ) {
    return res.status(400).json({ message: "กรุณากรอกข้อมูลให้ครบ" });
  }

  const sql =
    "INSERT INTO users (username, email, password, gender, province) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [username, email, password, gender, province], (err, result) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });

    res.status(201).json({ message: "สมัครสมาชิกสำเร็จ!" });
  });
});

// 🔐 **เข้าสู่ระบบ (Login)**
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "กรุณากรอกอีเมลและรหัสผ่าน" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });

    if (results.length === 0) {
      return res.status(401).json({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }

    res.json({ message: "เข้าสู่ระบบสำเร็จ", user: results[0] });
  });
});

// 📌 **ดึงข้อมูลผู้ใช้ทั้งหมด**
app.get("/users", (req, res) => {
  const sql = "SELECT id, username, email, gender, province FROM users";
  db.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });

    res.json(results);
  });
});

// 🏃‍♂️ **Start Server**
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});


