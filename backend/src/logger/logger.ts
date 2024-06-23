import winston, {createLogger} from 'winston';
import {logTransports} from ' ./transports.ts';
import {logFormat} from './format.ts';
import {logLevels} from './levels.ts';
const config = {
  levels: logLevels,
  level: 'signal',
  transports: logTransports,		
  exceptionHandlers: [ 
    new transports.File({ filename: 'exceptions.log' })
  ],
  format: logFormat,
}

const logger = createLogger(config);
function log(data: string) {
  return logger.info(data);
}
function error(data: string | Error) {
  return logger.error(data)
}

export {logger};
