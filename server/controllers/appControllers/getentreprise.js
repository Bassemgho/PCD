import entreprise from '../../models/entreprise.js'
import errorResponse from '../../utils/ErrorResponse.js'
export const getentreprise = async (req,res,next) => {

  try {
    const entreprises = await entreprise.find({})
    if (!entreprises) {
      return next(new errorResponse("pas d'entreprises",404));
    }
    return res.status(201).json(entreprises)
  } catch (e) {
    next(e);
  }
}
