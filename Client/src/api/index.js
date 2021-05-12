import axios from 'axios'
const urlSignin = "http://localhost:5000/user/signin"
const urlSignup = "http://localhost:5000/user/signup"
//sawsen
const url = "http://localhost:5000/entreprise/display";

export const sendcreds = async (username,password) => {
  const creds = {username:username,password:password};
  return await axios.post(urlSignin,creds);
}
export const signup = async (username,password,email,name,logo) => {
  const infos = {username,password,email,name,logo}
  return await axios.post(urlSignup,infos);
}

//sawsen
/*
export const getentreprise = async () => {
    return await axios.get(url);
  
};
*/
