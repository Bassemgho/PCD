import axios from 'axios'
const urlSignin = "http://localhost:5000/user/signin"
const urlSignup = "http://localhost:5000/user/signup"
//sawsen
const urlptvente = "http://localhost:5000/user/addptsventes"
const urlcaissier = "http://localhost:5000/user/addcaissier"
const url = "http://localhost:5000/entreprise/display";
const urlaff = "http://localhost:5000/user/ptvente/get"
const urlbon = "http://localhost:5000/params/addbonparam";
const urlred = "http://localhost:5000/params/addredparam";
const urlaffcaiss = "http://localhost:5000/user/caissier/get";

const urlupdate = "http://localhost:5000/user/update";

const urlclient = "http://localhost:5000/user/getclient";

const urlparam = "http://localhost:5000/user/addparam";

const urlevent = "http://localhost:5000/user/addevent";
const urlgetevent = "http://localhost:5000/user/getevent";

const urlgetbon ="http://localhost:5000/params/getbonparams";
const urlgetred ="http://localhost:5000/params/getredparams";
const urldelete ="http://localhost:5000/user/deleteptvente";
//
const urldelevent="http://localhost:5000/user/delev";

const urldeletec ="http://localhost:5000/user/deletecaissier";
const urldelbon ="http://localhost:5000/params/deletebon";
const urldelred ="http://localhost:5000/params/deletered";
const urldeletent ="http://localhost:5000/entreprise/deleteentreprise";


const urlsignadm="http://localhost:5000/admins/signin";

const urlnom="http://localhost:5000/user/getnom";

const urlchange="http://localhost:5000/params/changeequiv";

export const changeequiv = async (newmontant,newequiv_mont_pts,token) => {
  const inf={newmontant,newequiv_mont_pts};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urlchange,inf,config);
}

export const signadmin = async (username,password) => {
  const creds = {username:username,password:password};
  return await axios.post(urlsignadm,creds);
}
 

export const sendcreds = async (username,password) => {
  const creds = {username:username,password:password};
  return await axios.post(urlSignin,creds);
}
export const signup = async (username,password,email,name,logo) => {
  const infos = {username,password,email,name,logo}
  return await axios.post(urlSignup,infos);
}

//sawsen

export const deletebon = async (id_bon,token) => {
  const inf={id_bon};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldelbon,inf,config);
}


export const deletered = async (id_red,token) => {
  const inf={id_red};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldelred,inf,config);
}

export const deleteptvente = async (id_ptvent,token) => {
  const inf={id_ptvent};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldelete,inf,config);
}

export const deletecaissier = async (id_caiss,token) => {
  const inf={id_caiss};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldeletec,inf,config);
}


///khra

export const delevent = async (id_ev,token) => {
  const inf={id_ev};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldelevent,inf,config);
}


export const addptvente = async (nom, address, lat,lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin, token) => {
  const inf = {nom, address, lat, lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin}
  return await axios.post(urlptvente,inf,{headers : { Authorization : `Bearer ${token}`}});
}


export const addevent = async (nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,anfin, heuredebut,mindebut,heurefin,minfin, token) => {
  const inf = {nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,anfin, heuredebut,mindebut,heurefin,minfin}
  return await axios.post(urlevent,inf,{headers : { Authorization : `Bearer ${token}`}});
}


export const addcaissier = async (name,username,password,id_ptvente,token) => {
  const inf = {name,username,password,id_ptvente}
  return await axios.post(urlcaissier,inf,{headers : { Authorization : `Bearer ${token}`}})
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
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlaff,config);
  console.log('ptvente get');
  return rep;
}


export const getevent = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlgetevent,config);
  console.log('event get');
  return rep;
}


export const getbonparams = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlgetbon,config);
  console.log('bon get');
  return rep;
}


export const getredparams = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlgetred,config);
  console.log('red get');
  return rep;
}


export const getcaissier = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlaffcaiss,config);
  console.log('caissier get');
  return rep;
}

export const updateEntreprise = async (newusername, newemail,newpassword, token) => {
  const inf = {newusername,newemail, newpassword};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.post(urlupdate,inf,config);
  console.log('data up to date');
  return rep;
}


/*
export const updateEntreprise = async (username,email,password, token) => {
  const inf = {username,email,password};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.patch(urlupdate,inf,config);
  console.log('data up to date');
  return rep;
}
*/

export const getclient = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlclient,config);
  console.log('data get');
  return rep;
}

// il ya un prob

export const addparam = async (newmontant, newequiv_mont_pts ,token) => {
  const inf = {newmontant, newequiv_mont_pts};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.post(urlparam,inf,config);
  console.log('params carte ajoutés');
  return rep;
}

/*
export const getentreprise = async () => {
    return await axios.get(url);

};
*/
export const getentreprise = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(url,config);
  return rep;
}


export const deleteentreprise = async (id_ent,token) => {
  const inf={id_ent};
  const config = {headers : { Authorization : `Bearer ${token}`}};
  return await axios.post(urldeletent,inf,config);
}

export const getnom = async (token) => {
  const config = {headers : { Authorization : `Bearer ${token}`}};
  const rep = await axios.get(urlnom,config);
  console.log('nom get');
  return rep;
}