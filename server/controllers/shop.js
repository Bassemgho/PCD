import shop from '../models/shop.js'


export const getshop = async (req,res,next) => {

  // const {equiv_mont_pts} = req.body
  const user = req.user;
  try {

    const data = await shop.findOne({id_entreprise:user.id_entreprise}).populate("bonparams").populate("reductionparams").exec();
    return res.status(201).json({success:true,data})
  } catch (e) {
    next(e)
  }
}
