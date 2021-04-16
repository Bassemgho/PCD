import errorResponse from '../utils/ErrorResponse.js'

const errorHandler = (err,req,res,next) => {
  let error = {...err};
  error.message = err.message
  if (err.code===11000) {
    const message = "Duplicate key values error"
    error = new errorResponse(message,404)
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => { val.message;})
    error = new errorResponse(message,400)
  }
  console.log(error.message);
   res.status(error.cod).json({
    success:false,
    error:error.message|| "Server Error"
  })
}
export default errorHandler;
