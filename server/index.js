require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'this is first page' });
})
app.get('/api/test1', (req, res) => {
    res.json({ message: 'This is test endpoint 1' });
});

app.get('/api/test2', (req, res) => {
    res.json({ message: 'This is test endpoint 2' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
