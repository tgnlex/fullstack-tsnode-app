import {readFileSync} from 'fs'
import * as util from 'util'

function readF(file, ) {
  readFileSync(`${file}`, "utf-8", (err, data) => {
    if (err) {
      console.error(error);
      // logger.error(error)
      return
   } else {
      console.log(data);
      return data;
    }
  })
};
