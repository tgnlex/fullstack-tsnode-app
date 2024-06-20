import util from 'util';
import {writeFile} from 'fs';
import {Writable} from 'stream';

const fwrite = util.promisify(writeFile);

class WriteStream extends Writeable {
  filepath: string;
  constructor(filepath: string) {
    super();
    this.filepath = filepath; 
  }
  _write(chunk: any, encoding; string, next: (error?: Error) => void) {
    fwrite(this.path, chunk)
      .then(() => next())
      .catch((error) => next(error));
}
}

function createWriter(file: string) {
  let writer = new WriteStream(file);
  return writer;
}
export {WriteStream, createWriter};

