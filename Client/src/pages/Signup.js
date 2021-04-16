import React , {useState} from 'react';
import * as api from '../api/index.js'


const Signup = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
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
        <div class="container">

              <ol class="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li class="active">Registration</li>
              </ol>

          <div class="row">

                  <article class="col-xs-12 maincontent">
                      <header class="page-header">
                          <h1 class="page-title">Registration</h1>
                      </header>

                      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                          <div class="panel panel-default">
                              <div class="panel-body">
                                  <h3 class="thin text-center">Register a new account</h3>
                                  <p class="text-center text-muted">Lorem ipsum dolor sit amet, <a href="signin.html">Login</a> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>
                                  <hr/>

                                  <form onSubmit = {handleSubmit}>
                                      <div class="top-margin">
                                          <label>First Name</label>
                                          <input type="text" name="username" onChange={handleChange} class="form-control"/>
                                      </div>
                                      <div class="top-margin">
                                          <label>Last Name</label>
                                          <input type="text" class="form-control"/>
                                      </div>
                                      <div class="top-margin">
                                          <label>Email Address <span class="text-danger">*</span></label>
                                          <input type="text" name="email" onChange={handleChange} class="form-control"/>
                                      </div>

                                      <div class="row top-margin">
                                          <div class="col-sm-6">
                                              <label>Password <span class="text-danger">*</span></label>
                                              <input type="text" onChange={handleChange} name="password" class="form-control"/>
                                          </div>
                                          <div class="col-sm-6">
                                              <label>Confirm Password <span class="text-danger">*</span></label>
                                              <input type="text" class="form-control"/>
                                          </div>
                                      </div>

                                      <hr/>

                                      <div class="row">
                                          <div class="col-lg-8">
                                              <label class="checkbox">
                                                  <input type="checkbox"/>
                                                  I've read the <a href="page_terms.html">Terms and Conditions</a>
                                              </label>
                                          </div>
                                          <div class="col-lg-4 text-right">
                                              <button class="btn btn-action" type="submit">Register</button>
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



export default Signup
