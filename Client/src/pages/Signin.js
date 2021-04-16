import React , {Component,useState} from 'react';
import * as api from '../api/index.js'
    const Signin = () => {
      const [username,setUsername] = useState('')
      const [password,setPassword] = useState('')
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

        } catch (e) {
          console.log(e);
        }
      }
      return(
          <div>

            <div class="container">

                  <ol class="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li class="active">User access</li>
                  </ol>

              <div class="row">

                      <article class="col-xs-12 maincontent">
                          <header class="page-header">
                              <h1 class="page-title">Sign in</h1>
                          </header>

                          <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                              <div class="panel panel-default">
                                  <div class="panel-body">
                                      <h3 class="thin text-center">Sign in to your account</h3>
                                      <p class="text-center text-muted">Lorem ipsum dolor sit amet, <a href="signup.html">Register</a> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>
                                      <hr/>

                                      <form onSubmit={handleSubmit}>
                                          <div class="top-margin">
                                              <label>Username/Email <span class="text-danger">*</span></label>
                                              <input name="username" type="text" onChange={handleChange} class="form-control"/>
                                          </div>
                                          <div class="top-margin">
                                              <label>Password <span class="text-danger">*</span></label>
                                              <input  name="password" type="password" class="form-control" onChange={handleChange}/>
                                          </div>

                                          <hr/>

                                          <div class="row">
                                              <div class="col-lg-8">
                                                  <b><a href="">Forgot password?</a></b>
                                              </div>
                                              <div class="col-lg-4 text-right">
                                                  <button class="btn btn-action" type="submit">Sign in</button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>

                          </div>

                      </article>


              </div>
            </div>
          </div>
      )
    }





export default Signin
