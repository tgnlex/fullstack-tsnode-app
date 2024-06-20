import type {Formatter} from './types';
const logFormat = {
  date: (format: string): Formatter => ({ date }) => moment(date).format(format),
  location: (): Formatter => ({ location }) => location,
  message:  (): Formatter => ({ message })  => message,
  text: (message: string): Formatter => () => message.toLowerCase(),
  level: (): Formatter => ({ level }) => level.toUpperCase();
  newLine: (): Formatter => () =. '\n';
}

const createTemplate = (...fns: Formatter[]) =. {
  return (info) => {
    return fns.reduce((prev, curr) => {
      return `${prev}${curr(info)}`
    })
  }
}

export {logFormat, createTemplate};
