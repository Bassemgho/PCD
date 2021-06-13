import stats from '../models/stats.js'

export const getdataC = async (req,res,next) => {
  const user = req.user;
  try {

  const st = await stats.find({id_entreprise:user.id_entreprise}).populate("id_ptvente")
  const list = {};
  st.map((item) => {
    if (! (Object.keys(list).includes( item.month))){
      list[item.month] = item.valeurC;
      console.log("done2");
    }else {
      list[item.month] = list[item.month] + item.valeurC;
      console.log("done1");
    }
  })
  return res.status(201).json({success:true,data:list});

} catch (e) {
  next(e)
}

}
export const getmonths = async (req,res,next) => {
  const user = req.user
  let ls= {}
  try {
    const st = await stats.find({id_entreprise:user.id_entreprise}).populate('id_ptvente');
    const list = {};
    st.map((item) => {
      let el = {}
      if (! (Object.keys(list).includes( item.month))){
        el[item.id_ptvente.nom]=item.valeurC;
        list[item.month] = el;
        console.log("done2");
      }else {
        el[item.id_ptvente.nom]=item.valeurC;
        list[item.month][item.id_ptvente.nom] = item.valeurC;
        console.log("done1");
      }
    })
    return res.status(201).json({success:true,data:list});

  } catch (e) {
    next(e)
  }

  }

// export const findbymonth = async (req,res,next) => {
//   const user = req.user
//   try {
//     const st = await stats.find({id_entreprise:user.id_entreprise,month:req.month}).populate("id_ptvente")
//
//   } catch (e) {
//
//   } finally {
//
//   }
// }
