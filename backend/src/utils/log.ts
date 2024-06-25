import {logger} from '../../logger/logger.js';
function log(data) {
  return logger.info(data);
}
function logDebug(data) {
  return logger.debug(data);
}
function logTrace(data) {
  return logger.trace(data)
}
function logSignal(data) {
  return logger.signal(data);
}
function logHTTP(data) {
  return logger.http(data);
}
function logNotice(data) {
  return logger.notice(data);
}
function logEvent(data) {
  return logger.event(data);
}
function logWarn(data) {
  return logger.warn(data);
}
function logError(data) {
  return logger.error(data)
}
function logAlert(data) {
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
