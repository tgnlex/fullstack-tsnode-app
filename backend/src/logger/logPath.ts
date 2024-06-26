import path from 'path';

const logFolder = path.resolve("../logs/");

function logPath(file) {
  path.join(logFolder, `${file}`)
}
export {logPath}
