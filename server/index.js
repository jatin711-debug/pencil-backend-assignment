import express from 'express';
import { searchQuestions } from '../controllers/index.js';
import { connectMongoDb } from '../database/init.js';

const app = express();

connectMongoDb();

app.get('/api', (req, res) => {
  res.send('Available Routes:  GET "/search');
});

app.get('/api/search', searchQuestions);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});