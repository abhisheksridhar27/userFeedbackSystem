const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', feedbackRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
