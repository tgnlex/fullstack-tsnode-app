import winston, {transports, createLogger} from 'winston';
import {logTransports} from './transports.ts';
import {logFormat} from './format.ts';
import {logLevels, LogLevels} from './levels.ts';
import {logPath} from './logPath.ts';

import {LOG_LEVEL} from '../config/env.ts';
const logConfig = {
  levels: logLevels,
  level: LOG_LEVEL,
  transports: [logTransports],		
  exceptionHandlers: [ 
    new transports.File({ filename: logPath('exceptions.log')});
  ],
  format: logFormat(),
};
};
@injectable()
class Logger {
  private static config: logConfig;
  private static _logger: winston.Logger;
  private static package: _appName  'ts-node-app';
  constructor () {
    this._logger = this._initalizeWinston();
  };
  private static _log(msg: LogMessage, level: LogLevel, context?: LogContext) {
    this._logger.log(level, msg, {context: context});
  };
  private static _getTransports() {
    const transports: Array<any> = [
      new winston.transports.Console({
        format: this._getFormatForConsole(),
      }),
    ];
    if (process.env.NODE_ENV === 'production' || 'development') {
      transports.push(this._getFileTransport());
    }
    return transports;
  }
  private static _getFormatForConsole() {
    return format: config.format,
  };
  private static _getFileTransport() {
    return new DailyRotateFile({
      filename: `${Logging._appName}-%DATE%.log`,
      zippedArchive: true, 
      maxSize: '10m',
      maxFiles: '14d',
      format: format.combine(),
      format(info => {
        console.log(info);
				info.app = this._appName;
				return info;
				})(),
				format.json()
      ),
    });
  }
  public static debug(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.DEBUG, context);
  };
  public static trace(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.TRACE, context);
  };
  public static signal(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.SIGNAL, context);
  };
  public static event(msg: LogMessage, context?: LogContext) {
    this._log(msg, oLogLevel.EVENT, context);
  };
  public static http(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.HTTP, context);
  };
  public static info(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.INFO, context);
  };
  public static notice(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.NOTICE, context)
  };
  public static warn(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.WARN, context);
  };
  public static error(msg: LogMessage, context?: LogContext) {
    this._log(msg, LogLevel.ERROR, context);
  };
  public static alert(msg: LogLevel, context?: LogContext) {
    this._log(msg, LogLevel.ALERT, context);
  };
}
export {Logger};
