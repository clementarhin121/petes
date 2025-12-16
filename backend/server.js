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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
