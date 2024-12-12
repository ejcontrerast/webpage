const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = { id: uuidv4(), ...req.body };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.post('/comments/:id/replies', (req, res) => {
  const { id } = req.params;
  const reply = { id: uuidv4(), ...req.body };
  const comment = comments.find((c) => c.id === id);
  if (comment) {
    comment.replies = comment.replies || [];
    comment.replies.push(reply);
    res.status(201).json(reply);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter((comment) => comment.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});