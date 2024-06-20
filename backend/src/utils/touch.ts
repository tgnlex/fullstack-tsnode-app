import * as fs from 'fs';
import * as util from 'util';

const fwrite = util.promisify(fs.writeFile);

function touch(path: string) {
    fwrite(path, '')
    .then(() => {
        console.log("file created successfully")
    }).catch(error => console.error(error));

}

export {touch};