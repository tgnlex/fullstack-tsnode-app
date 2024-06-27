import winston, {transports, createLogger} from 'winston';
import {logTransports} from './transports.ts';
import {logFormat} from './format.ts';
import {customLevels} from './levels.ts';
import {logPath} from './logPath';
import {LOG_LEVEL} from '../config/env.ts';
const config = {
  levels: customLevels,
  level: LOG_LEVEL,
  transports: [logTransports],		
  exceptionHandlers: [ 
    new transports.File({ filename: logPath('exceptions.log')});
  ],
  format: logFormat
};

const log = createLogger(config);

export {log};
