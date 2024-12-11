const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;
const COMMENTS_FILE = 'comments.json';

app.use(cors());
app.use(express.json());

// 🟢 Get all comments
app.get('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    const comments = data ? JSON.parse(data) : [];
    res.json(comments);
  });
});

// 🟢 Add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;

  fs.readFile(COMMENTS_FILE, 'utf8', (err, data) => {
    const comments = data ? JSON.parse(data) : [];
    comments.unshift(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Error saving comment' });
      }
      res.status(201).json(newComment);
    });
  });
});

// 🟢 Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
