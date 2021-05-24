import errorResponse from '../utils/ErrorResponse.js'
import caissier from '../models/caissier.js'
import jwt from 'jsonwebtoken'
const protectcaissier = async (req,res,next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

  }
  if (!token) {
    return next(new errorResponse("not authorized" ,401))
  }
  try {
    const decoded = jwt.verify(token,"testsecret")
    console.log("trying to find caissier"+decoded.id);
    const caiss = await caissier.findOne({ _id:decoded.id });
    if (!caiss) {
      console.log("we didnt find");
      return next(new errorResponse("no user found ",404))
    }
    req.caissier = caiss;

    next();
  } catch (e) {
    console.log("loll");
     return next(new errorResponse("Not authorized to access this router", 401));
  }
}
export default protectcaissier;
