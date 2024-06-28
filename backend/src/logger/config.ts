import winston, {transports} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import {
  alertTransport, 
  errorTransport, 
  warnTransport,
  noticeTransport, 
  debugTransport, 
  infoTransport, 
  consoleTransport
  } from './transports.ts';
import {logFormat} from './format.ts';
import {custom} from './levels.ts';
import {logPath} from './logPath.ts';
import {LOG_LEVEL} from '../config/env.ts';

const log = winston.createLogger({
  levels: custom.levels,
  level: LOG_LEVEL,
  transports: [
    debugTransport, 
    infoTransport, 
    noticeTransport,
    warnTransport,
    errorTransport,
    alertTransport,
    consoleTransport
  ],		
  exceptionHandlers: [consoleTransport],
  rejectionHandlers: [consoleTransport],
  format: logFormat
});

export {log};
