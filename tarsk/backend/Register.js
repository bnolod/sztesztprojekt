import express, { json } from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tarsk'
});

app.post('/register', jsonParser, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(req.body)
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