import winston, {createLogger} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import {logTransports} from ' ./transports.ts';
import {logFormat} from './format.ts';
const config = {
  level: 'signal',
  transports: logTransports,
  exceptionHandlers: [ 
    new transports.File({ filename: 'exceptions.log' })
  ],
  format: logFormat,
}

const logger = createLogger(config);
export {logger};
