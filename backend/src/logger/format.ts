import {format} from 'winston';
const {json, combine, timestamp, printf, colorize, align} = format;
 
const logFormat = format.combine(
      format.timestamp(),
      format.printf(
        i => 
				`[LOG][${i.timestamp}] [${i.level.toUpperCase()}]: ${ i.message } [CONTEXT] ->  ${i.context ? '\n' + JSON.stringify(i.context, null, 2) : '{}' 
				}`
      ),
    format.colorize({all: true})
);
export {logFormat};
