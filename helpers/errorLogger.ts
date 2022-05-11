export class Log {
  static readonly WARNING = 'Warning';
  static readonly ERROR = 'Error';

  static errors = [];

  static errorLogger = null;

  static warn = (...errorData: any[]) => {
    Log.log(Log.WARNING, errorData);
  };

  static warning = (...errorData: any[]) => {
    Log.log(Log.WARNING, errorData);
  };

  static error = (...errorData: any[]) => {
    Log.log(Log.ERROR, errorData);
  };

  private static log = (type: string, errorData: any[]) => {
    // @TODO: Do not log on production
    console.error(type + ':', ...errorData);

    // Only when in the browser, append errors to a *global* (static) variable.
    // We do this to nicely report all errors from the main rendering function
    // during development.
    //
    // Is there a way to make a react hook or context aware of this state so we
    // really update components once new errors are recorded? Remember that
    // this function is called from random functions, not necessarily only from
    // React components.
    if (typeof window !== 'undefined') {
      if (Log.errorLogger) {
        Log.errorLogger({ type: type, date: new Date(), data: errorData });
      } else {
        Log.errors.push({ type: type, date: new Date(), data: errorData });
      }
    }
  };

  static setErrorLogger = (errorLogger: Function) => {
    Log.errorLogger = errorLogger;
  };

  static hasErrors = () => {
    return !!Log.errors.length;
  };

  static getErrors = () => {
    return Log.errors.sort((a, b) => a.date - b.date);
  };
}
