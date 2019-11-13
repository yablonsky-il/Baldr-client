
import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';

import { renderHtml } from './render';

const app = express();
const port = process.env.PORT || 3005;

// app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  // console.log(req, 'req');
  // console.log(res, 'res');
  console.log(req.url);
  res.send(renderHtml(req.url));
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
