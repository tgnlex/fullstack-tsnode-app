import {app} from './server.ts';
import dotenv from 'dotenv';

dotenv.config();
const port: string | number = process.env.PORT || 5000;
const host: string = process.env.HOST || "localhost";

function main(): void {
  app.listen(port, () => {
    console.log(`[API]: Server is running at http://${host}, ${port} `)
  })
};


main()
