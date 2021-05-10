import React , {useState} from 'react';
import * as api from '../api/index.js'
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FileBase64 from './react-file-base64';

const Signup = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  //const [logo,setLogo] = useState('');


  const handleChange = (e) => {
    if (e.target.name==="password") {
      setPassword(e.target.value)
    }
    if (e.target.name==="username") {
      setUsername(e.target.value)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    /*
    if (e.target.name === "logo") {
      setLogo(e.target.value)
    }*/
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.signup(username,password,email)
      console.log("done");
    } catch (e) {
      console.log(e.error);
    } finally {

    }


  }


  return(
      <div>
        <Header/>
        <div className="container">

              <ol className="breadcrumb">
                  <li><Link to="/">Accueil</Link></li>
                  <li className="active">Inscription</li>
              </ol>

          <div className="row">

                  <article className="col-xs-12 maincontent">
                      <header className="page-header">
                          <h1 className="page-title">Inscription</h1>
                      </header>

                      <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                          <div className="panel panel-default">
                              <div className="panel-body">
                                  <h3 className="thin text-center">Créer un nouveau compte</h3>
                                  <p className="text-center text-muted">Si vous avez déjà un compte, <Link to="/signin">S'identifier</Link> ici. Si vous n'êtes pas encore inscrits il suffit de remplir le formulaire ci-dessous pour créer votre compte. </p>
                                  <hr/>

                                  <form onSubmit = {handleSubmit}>
                                      <div className="top-margin">
                                          <label>Nom Entreprise</label>
                                          <input type="text" name="name" onChange={handleChange} className="form-control"/>
                                      </div>

                                      <div className="top-margin">
                                          <label>Nom Utilisateur</label>
                                          <input type="text" name="username" onChange={handleChange} className="form-control"/>
                                      </div>
                                  
                                      <div className="top-margin">
                                          <label>Adresse Email<span className="text-danger">*</span></label>
                                          <input type="text" name="email" onChange={handleChange} className="form-control"/>
                                      </div>

                                      <div className="row top-margin">
                                          <div className="col-sm-6">
                                              <label>Mot de passe <span className="text-danger">*</span></label>
                                              <input type="text" onChange={handleChange} name="password" className="form-control"/>
                                          </div>
                                          <div className="col-sm-6">
                                              <label>Confirmer mot de passe <span className="text-danger">*</span></label>
                                              <input type="text" className="form-control"/>
                                          </div>
                                      </div>
                                      <div className="top-margin">
                                          <label>Ajouter votre logo<span className="text-danger">*</span></label>
                                          {/*
                                          <FileBase64 type="file" multiple={true} onDone={({base64})=> setPostData({ ...postData, selectedFile: base64})} />*/}
                                          <input type="file" name="file" onChange={handleChange} />
                                        
                                      </div>

                                      <hr/>

                                      <div className="row">
                                         
                                          <div className="col-lg-4 text-right">
                                              <button className="btn btn-action" type="submit">S'inscrire</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>

                      </div>

                  </article>

          </div>
        </div>
        <Footer/>
      </div>
  )
}



export default Signup
