import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


//define a route on the server
app.get("/home", (req, res) => {
    res.status(200).send("Hello, from Express.js!");
});


//start the server on a port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
