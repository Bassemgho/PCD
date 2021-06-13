import stats from '../models/stats.js'

export const getdataC = async (req,res,next) => {
  const user = req.user;
  try {

  const st = await stats.find({id_entreprise:user.id_entreprise}).populate("id_ptvente")
  let list = {};
  st.map((item) => {
    if (! (Object.keys(list).includes( item.month))){
      list[item.month] = item.valeurC;
      console.log("done2");
    }else {
      list[item.month] += item.valeurC;
      console.log("done1");
    }
    return res.status(201).json({success:true,data:list});
  })

} catch (e) {
  next(e)
}

}
