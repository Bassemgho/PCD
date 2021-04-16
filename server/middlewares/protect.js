import errorResponse from '../utils/ErrorResponse.js'
import users from '../models/user.js'
import jwt from 'jsonwebtoken'
const protect = async (req,res,next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

  }
  if (!token) {
    return next(new errorResponse("not authorized" ,401))
  }
  try {
    const decoded = jwt.verify(token,"testsecret")
    const user = await users.findById(decoded.id);
    if (!user) {
      return next(new errorResponse("no user found ",404))
    }
    req.user = user
  } catch (e) {
     return next(new ErrorResponse("Not authorized to access this router", 401));
  }
}
export default protect;
