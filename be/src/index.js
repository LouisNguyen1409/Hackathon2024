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

app.get('/plan', (req, res) => {
    const healthyAndUnhealthyIngredients = [
        "Things that you should eat: Spinach, Chicken breast, Brown rice, Rruits, Vegetables",
        "Things that you shouldn't eat: Soda, Fried Chicken, Sausages, Ice cream, White rice"
    ];
    res.send(healthyAndUnhealthyIngredients);
});

res.get('/activites', (req, res) =>{
    listActivities = [["Push ups", ["Sets: 3", "Repetition: 10-15 per set", "Estimated Time: 5 minutes"]], ["Squats", ["Sets: 3", "Repetitions: 15-20 per set", "Estimated time: 5 minutes"]]
    ["Plank", ["Sets: 3", "Duration: 30-60 seconds per set", "Estimated time: 5 minutes"]], ["Dumbell rows", ["Sets: 3", "Repetitions: 10-12 per set", "Estimated time: 5 minutes"]]]
    res.send(listActivities);
});
