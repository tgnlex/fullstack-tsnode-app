import {TransportConfig, Level} from './types';

const defaultConf: Partial<Config> = {
  level: 'signal',
  format: JSON.stringify,
  colorize: true,
  template: createTemplate(
    format.level(),
    format.text(' - '),
    format.date('DD/MM/YYYY'),
    format.newLine(),
    format.location(),
    format.newLine(),
    format.message(),
  ),
};

class Transport<T extends TransportConfig = TransportConfig> {
  protected config: T;
  public constructor(config: T) {
    this.config = { ...defaultConf, ...(config as any) };
  }
  public isAllowed(level: Level): boolean {
    return isAllowed(this.config.level, level)
  }
  public log({message, level }: { message: string}): string {
    return message;
  }
  public format(value: any): string {
    return this.conig.format(value);
  }
  public getMessage(info: Info): string {
                return.this.config.template(info);
    }
}
