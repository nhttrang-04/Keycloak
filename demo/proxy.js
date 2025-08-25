const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from a specific origin
app.use(cors({
    origin: 'http://localhost:5173/' // Replace with your frontend URL
}));

// Other middleware and routes

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});