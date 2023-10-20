const express = require('express');
const cors = require('cors');
const phone = require('./routes/api/phones')

const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/phones', phone);

app.listen(PORT, () => console.log(`server is starting on port ${PORT}`));