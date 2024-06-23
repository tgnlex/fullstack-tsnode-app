import {logger} from '../logger/logger.ts';

function log(data: string) {
  return logger.info(data);
}
function logDebug(data: string) {
  return logger.debug(data);
}
function logTrace(data: string) {
  return logger.trace(data)
}
function logSignal(data: string) {
  return logger.signal(data);
}
function logHTTP(data: string | error) {
  return logger.http(data);
}
function logNotice(data: string | error) {
  return logger.notice(data);
}
function logEvent(data: string | event | error) {
  return logger.event(data);
}
function logWarn(data: string | Error) {
  return logger.warn(data);
}
function logError(data: string | Error) {
  return logger.error(data)
}
function logAlert(data: string | Error) {
  return logger.alert(data);
}
export {
  log, 
  logDebug, 
  logTrace,
  logSignal, 
  logHTTP, 
  logNotice, 
  logEvent, 
  logWarn, 
  logError,
  logAlert
}
