import express, {Express, Request, NextFunction, Response} from 'express';
import {hitCounter} from './mw/hits.ts';
const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const hits = hitCounter(req, next);
  console.log(hits);
  res.json({"message": "Hello World"})
})

export {app};
