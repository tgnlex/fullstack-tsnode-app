import {format} from 'winston';
const logFormat = format.combine(
  format.json(),
  format.colorize()
)

export {logFormat};
