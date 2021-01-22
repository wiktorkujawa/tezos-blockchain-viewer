const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true
  })
);

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, './dist/index.html')) 
}); 

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));