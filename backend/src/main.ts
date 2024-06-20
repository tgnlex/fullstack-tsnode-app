import {server} from './server.ts';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

function main(){
  server.listen(port, () => {
    console.log(`[API]: Server is running at http://${host}, ${port} `)
  })
};


main()
