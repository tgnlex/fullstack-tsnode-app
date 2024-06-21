import {transports} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logTransports = [
    new DailyRotateFile(opts);
    new transports.Console(),
    new transports.File({ filename: 'important.log', level: 'notice' }),
    new transports.File({ filename: 'info.log', level: 'event' }),
    new transports.File({ filename: 'debug.log', level: 'debug' }),
]
export {logTransports};
