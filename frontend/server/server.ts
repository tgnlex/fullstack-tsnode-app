import express from 'express';
import {createServer} from 'http';
const app = express();
const hits = { count: 0 }

function hitCounter(req) {
   hits.count + 1;
   console.log(`Hits: ${hits.count}`);
   next()
}

app.listen("/", (req, res, next) => {
  hitCounter(req);
  res.send("../view/index.html")
})







const server = createServer(app);
export {server};
