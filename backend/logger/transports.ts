import winston, {transports} from 'winston';

const logTransports = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: '@/logs/important.log', level: 'notice' }),
    new winston.transports.File({ filename: '@/logs/info.log', level: 'event' }),
    new winston.transports.File({ filename: '@/logs/debug.log', level: 'debug' }),
]
export {logTransports};
