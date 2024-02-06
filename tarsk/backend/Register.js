import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tarsk'
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    db.query(
        "INSERT INTO login (username, password, email) VALUES (?,?,?)",
        [username, password, email],
        (err, result) => {
            console.log(err);
        }
    );
});

app.listen(8081, () => {
  console.log('Server started on port 8081');
});