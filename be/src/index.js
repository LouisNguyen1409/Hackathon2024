import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';

const app = express();
const port = 3003;

app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(errorHandler());

// start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
