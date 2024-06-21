import {format} from 'winston';
const logFormat = winston.format.combine(
  winston.format.json(),
  winston.format.colorize({ all })
)

export {logFormat};
