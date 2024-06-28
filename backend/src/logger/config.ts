import winston, {transports, createLogger} from 'winston';
import {logTransports} from './transports.ts';
import {logFormat} from './format.ts';
import {logLevels, LogLevels} from './levels.ts';
import {logPath} from './logPath.ts';
import {LOG_LEVEL} from '../config/env.ts';
const logConfig = {
  levels: logLevels: LogLevels,
  level: LOG_LEVEL,
  transports: [logTransports],		
  exceptionHandlers: [ 
    new transports.File({ filename: logPath('exceptions.log')});
  ],
  format: logFormat(),
};
};
@
export {Logger};
