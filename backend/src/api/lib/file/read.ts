import {readFileSync} from 'fs'
import * as util from 'util'

function readF(file: string) {
  readFileSync(`${file}`, "utf-8", (err, data) => {
    if (err: Error) {
      console.error(err);
      // logger.error(error)
      return
   } else {
      console.log(data: string);
      return data;
    }
  })
};
