function HttpError (response, message) {
  const instance = new Error(response, message);
  instance.name = 'HttpError';
  instance.response = response;
  instance.message = message;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, HttpError);
  }
  return instance;
}

HttpError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

export default HttpError;