import winston, {transports, createLogger} from 'winston';
import {logTransports} from './transports.ts';
import {logFormat} from './format.ts';
import {logLevels} from './levels.ts';
import {logPath} from './logPath';
const config = {
  levels: logLevels,
  level: 'signal',
  transports: logTransports,		
  exceptionHandlers: [ 
    new transports.File({ filename: logPath('exceptions.log')});
  ],
  format: logFormat,
}

const logger = createLogger(config);

export {logger};
