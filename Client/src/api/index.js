import axios from 'axios'
const urlSignin = "http://localhost:5000/user/signin"
const urlSignup = "http://localhost:5000/user/signup"
//sawsen
const urlptvente = "http://localhost:5000/user/addptsventes"
const url = "http://localhost:5000/entreprise/display";
const urlaff = "http://localhost:5000/user"
const urlbon = "http://localhost:5000/user/addbonparam";
const urlred = "http://localhost:5000/user/addredparam"

export const sendcreds = async (username,password) => {
  const creds = {username:username,password:password};
  return await axios.post(urlSignin,creds);
}
export const signup = async (username,password,email,name,logo) => {
  const infos = {username,password,email,name,logo}
  return await axios.post(urlSignup,infos);
}

//sawsen


export const addptvente = async (nom, address, lat,lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin, token) => {
  const inf = {nom, address, lat, lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin}
  return await axios.post(urlptvente,inf,{headers : { Authorization : `Bearer ${token}`}});
}


export const addbonparam = async (pts,delai,valeurbon, token) => {
  const inf = {pts,delai,valeurbon}
  return await axios.post(urlbon,inf,{headers : { Authorization : `Bearer ${token}`}});
}

export const addredparam = async (ptsred,delaired,percent, token) => {
  const inf = {ptsred,delaired,percent}
  return await axios.post(urlred,inf,{headers : { Authorization : `Bearer ${token}`}});
}

//bassem à vérifier

export const getptvente = async (token) => {
  const {id} = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.get(`${urlaff}/${id}`);
}

/*
export const getentreprise = async () => {
    return await axios.get(url);
  
};
*/
