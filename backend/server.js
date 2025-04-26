const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // <-- Add this

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
