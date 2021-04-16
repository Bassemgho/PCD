class errorResponse extends Error {
  constructor(message,status) {
    super(message);
    this.cod = status;
  }
}
export default errorResponse;
