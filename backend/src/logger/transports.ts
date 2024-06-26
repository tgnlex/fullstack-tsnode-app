import winston, {transports} from 'winston';
import {logPath} from './logPath.ts';

const logTransports = [
    new transports.Console(),
    new transports.File(
				{ filename: logPath('important.log'), level: 'notice' }),
    new transports.File(
				{ filename: logPath('info.log'), level: 'event' }),
    new transports.File(
				{ filename: logPath('debug.log'), level: 'debug' }),
]
export {logTransports};
