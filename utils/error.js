class Error {
  constructor(error, message) {
    super(error, message);
    this.error = error;
    this.message = message;
  }
}

export default Error;