const express = require('express');
const app = express();
const port = 3001; 
const { postData } = require('./Data/Posts'); 
app.use(express.json());
console.log(postData);
app.get('/api/posts', (req, res) => {
  res.json(postData);
  
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
