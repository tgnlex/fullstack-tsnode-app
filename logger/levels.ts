const levels = {
  fatal: 'fatal',
  alert: 'alert',
  error: 'error',
  warn:  'warn',
  notice:'notice',
  info:  'info',
  event: 'event',
  signal:'signal',
  trace: 'trace', 
  debug: 'debug',
  meta:  'meta',
}

const levelNumbers = {
  [levels.fatal]: 100,
  [levels.alert]: 90,
  [levels.error]: 80,
  [levels.warn]:  70,
  [levels.notice]:60,
  [levels.info]:  50,
  [levels.event]: 40, 
  [levels.signal]:30,
  [levels.trace]: 20,
  [levels.debug]: 10,
  [levels.meta]:  0,
}

export {levels, levelNumbers}
