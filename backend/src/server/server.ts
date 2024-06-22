import express, {Express, Request, Response} from 'express';
import {hitCounter} from './mw/hits.ts';
const server: Express = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(hitCounter);

server.get("/", (req: Request, res: Response) => {
  res.json({"message": "Hello World"})
})

export {server};
