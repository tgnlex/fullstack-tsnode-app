import {server} from './server.js';
const host = 'localhost';
const port = 3000;

function main() {
  server.listen(port)
  console.log(`Server is listening on http://${host}:${port} `)
};


main()
