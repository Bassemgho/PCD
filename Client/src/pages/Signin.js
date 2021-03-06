import React , {Component,useState} from 'react';
import * as api from '../api/index.js'
import {Link,Route,Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
    const Signin = (props) => {
      const [username,setUsername] = useState('')
      const [password,setPassword] = useState('')
      // const [authorized,setAuthorized] = useState(false);

      const handleChange = (e) => {
        if (e.target.name==="password") {
          setPassword(e.target.value)
        }
        if (e.target.name==="username") {
          setUsername(e.target.value)
        }

      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const rep = await api.sendcreds(username,password);
          console.log(rep);
          if (rep.data.success) {
            props.setToken(rep.data.token);
            props.setAuthorized(true);
            localStorage.setItem('authorized',true)
            localStorage.setItem("token",rep.data.token);
            localStorage.setItem("expirationdate",rep.data.expirationdate)
          }
          else {
            alert("Nom d'utilisateur ou mot de passe incorrect !");
          }

        } catch (e) {
          console.log(e);
        alert("Nom d'utilisateur ou mot de passe incorrect !");
        }
      }
      if (localStorage.getItem('authorized')==='true') {
        return (<Route exact path="/signin"><Redirect to="/dashboard" /></Route>);
      }
      return(
          <div>
<Header/>
            <div className="container">

                  <ol className="breadcrumb">
                      <li><Link to="/">Accueil</Link></li>
                      <li className="active">Accès utilisateur</li>
                  </ol>

              <div className="row">

                      <article className="col-xs-12 maincontent">
                          <header className="page-header">
                              <h1 className="page-title">S'identifier</h1>
                          </header>

                          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                              <div className="panel panel-default">
                                  <div className="panel-body">
                                      <h3 className="thin text-center">Connectez-vous à votre compte</h3>
                                      <p className="text-center text-muted">Si vous n'avez pas un compte, <Link to="/signup">S'inscrire</Link> ici.</p>
                                      <hr/>

                                      <form onSubmit={handleSubmit}>
                                          <div className="top-margin">
                                              <label>Nom d'utilisateur <span className="text-danger">*</span></label>
                                              <input name="username" type="text" onChange={handleChange} className="form-control"/>
                                          </div>
                                          <div className="top-margin">
                                              <label>Mot de passe <span className="text-danger">*</span></label>
                                              <input  name="password" type="password" className="form-control" onChange={handleChange}/>
                                          </div>

                                          <hr/>

                                          <div className="row">

                                              <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit"><Route exact path="/signin">{props.authorized ? <Redirect to="/dashboard" /> :'' }</Route>S'identifier</button>
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





export default Signin
