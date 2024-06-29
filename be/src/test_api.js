import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';
import axios from 'axios';

const app = express();
const port = 3003;
const openaiApiKey = process.env.OPENAI_API_KEY;

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

app.get('/activites', (req, res) =>{
    const listActivities = [["Push ups", ["Sets: 3", "Repetition: 10-15 per set", "Estimated Time: 5 minutes"]], ["Squats", ["Sets: 3", "Repetitions: 15-20 per set", "Estimated time: 5 minutes"]]
    ["Plank", ["Sets: 3", "Duration: 30-60 seconds per set", "Estimated time: 5 minutes"]], ["Dumbell rows", ["Sets: 3", "Repetitions: 10-12 per set", "Estimated time: 5 minutes"]]]
    res.send(listActivities);
});


app.post('/chat', async (req, res) => {
    try {
      const userMessage = req.body.message;

      if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // or 'gpt-3.5-turbo'
          messages: [
            {
            role: 'system',
            content: 'You are a health scientist.'
          },
          { role: 'user', content: userMessage }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`,
          },
        }
      );

      const botMessage = response.data.choices[0].message.content.trim();
      res.json({ response: botMessage });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  });
