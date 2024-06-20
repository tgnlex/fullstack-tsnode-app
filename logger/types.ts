interface LogConfig {
  transports?: Transport[];
  level?: Level;
}


interface TransportConfig {
  format?: (value: any) => string;
  level?: Level;
  template?: (info: Info) => string;
}

interface Config extends TransportConfig {
  colorize?: boolean;
}

interface InfoLog {
  date: Date;
  level: string;
  message: string;
  location: string;
}

type Formatter = (info: InfoLog) => string; 

export type {LogConfig, TransportConfig, Info, Formatter};

