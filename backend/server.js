const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "userpass",
  database: process.env.DB_NAME || "teamdb",
  port: 3306,
});

function connectWithRetry() {
  db.connect((err) => {
    if (err) {
      console.error("MySQL not ready, retrying in 5 seconds...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("MySQL connected!");
    }
  });
}

connectWithRetry();

app.get("/data", (req, res) => {
  db.query("SELECT * FROM destinations", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Query failed" });
    }
    res.json(results);
  });
});

app.get("/city/:id", (req, res) => {
  const cityId = req.params.id;
  const myswl = "SELECT * FROM destinations WHERE id = ?";
  db.query(myswl, [cityId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Query failed" });
    }
    res.json(results);
  });
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql =
    "INSERT INTO users (fullname, email, password_hash) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Signup failed" });
    }
    res.status(201).json({ message: "User created successfully" });
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password_hash = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Signin failed" });
    }

    if (results.length > 0) {
      const user = results[0];
      // ✅ return the fields you want in frontend
      res.json({
        user: {
          id: user.id,
          name: user.fullname,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
