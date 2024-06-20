import {Transport, defaultConfig} from './transport';
import {colors} from './colors';

import type {Config} from './types';

class ConsoleTransport extends Transport<Config> {
  public static colors = colors;
  public constructor(unsafeConfig: Config) {
    const config = { ...defaultConfig, ...unsafeConfig}
    super(config)
  }
  public format(value: any): string {
    if (_.isObject(value)) {
      return ``\n${inspect(value, false, 2, true)}\n`
    }
    return String(value);
  }
  public getConsoleMethod(level: string) {
    const method = console[level];
    if (method) {
      return method.bind(console)
    }
    return console.log.bind(console)
  }
  public log(message: string, level: string) {
    let msg = message;
    const logToConsole = this.getConsoleMethod(level);
    if (this.cinfig.colorize) {
      msg = colors[level](message)
    }
    logToConsole(`${msg}\n`);
    return msg;
  }
}
export {ConsoleTransport};
