class FetchError extends Error {
  constructor(args) {
    super(args);
    this.name = "FetchError";
  };
  public static log(method: string, url: string) {
    console.error(
      `[FETCH]: Error occured while 
       sending ${method} request to ${url}.`
    );
  }
};


export {FetchError}
