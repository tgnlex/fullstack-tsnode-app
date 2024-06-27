import {app} from './server/app.ts';
import {API_HOST, API_PORT} from './config/env.ts';
import './config/fetch-polyfill.js';
const host = API_HOST;
const port = API_PORT;


function main(): void {
  app.listen(port, () => {
    console.log(`[API]: Server is running at http://${host}, ${port} `)
  })
};


main()
