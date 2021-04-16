import axios from 'axios'
const urlSignin = "http://localhost:5000/user/signin"
const urlSignup = "http://localhost:5000/user/signup"

export const sendcreds = async (username,password) => {
  const creds = {username:username,password:password};
  return await axios.post(urlSignin,creds);
}
export const signup = async (username,password,email) => {
  const infos = {username,password,email}
  return await axios.post(urlSignup,infos);
}
