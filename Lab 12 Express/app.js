const express = require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const app = express();
app.use(bodyParser.json());
const PORT = 3003;


// Members API Routes
app.use('/api/courses', require('./routes/api/courses'));

//Route to Image
app.get('/image', (req, res) => {
    const image = fs.readFileSync('./images/node.png');
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': image.length
    });
    res.end(image);
  });

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));