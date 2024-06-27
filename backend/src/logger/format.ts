import {format} from 'winston';
const {json, combine, timestamp, printf, colorize, align} = format;
const logFormat = format.combine(
 
  json(),
  colorize({all: true}),
  timestamp({ format: 'DD-MM-YYYY hh::mm:ss.SSS A'}),
  align(),
  printf((i) => `[LOG]: [${i.timestamp}] level: ${i.level} message: ${i.message}`)
)

export {logFormat};
