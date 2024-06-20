import express, {Express, Request, Response} from 'express';
const server: Express = express();

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  res.json({"message": "Hello World"})
})

export {server};
