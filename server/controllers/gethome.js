export const gethome = (req,res,next) => {
  res.status(201).json({success:true,message:"welcome_to _your_home_page"});
}
