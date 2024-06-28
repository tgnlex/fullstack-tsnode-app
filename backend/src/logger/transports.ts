import winston, {transports} from 'winston';
import {logPath} from './logPath.ts';
import DailyRotateFile from "winston-daily-rotate-file"
const logFileTransports = [
    new DailyRotateFile.File(
				{ filename: logPath('important.log'), level: 'notice' }),
    new DailyRotateFile.File(
				{ filename: logPath('info.log'), level: 'event' }),
    new DailyRotateFile.File(
				{ filename: logPath('debug.log'), level: 'debug' }),
]
const consoleTransport = new winston.transports.Console();
export {logFileTransports};
