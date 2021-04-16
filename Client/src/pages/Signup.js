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
        <div className="container">

              <ol className="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">Registration</li>
              </ol>

          <div className="row">

                  <article className="col-xs-12 maincontent">
                      <header className="page-header">
                          <h1 className="page-title">Registration</h1>
                      </header>

                      <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                          <div className="panel panel-default">
                              <div className="panel-body">
                                  <h3 className="thin text-center">Register a new account</h3>
                                  <p className="text-center text-muted">Lorem ipsum dolor sit amet, <a href="signin.html">Login</a> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>
                                  <hr/>

                                  <form onSubmit = {handleSubmit}>
                                      <div className="top-margin">
                                          <label>First Name</label>
                                          <input type="text" name="username" onChange={handleChange} className="form-control"/>
                                      </div>
                                      <div className="top-margin">
                                          <label>Last Name</label>
                                          <input type="text" class="form-control"/>
                                      </div>
                                      <div class="top-margin">
                                          <label>Email Address <span class="text-danger">*</span></label>
                                          <input type="text" name="email" onChange={handleChange} className="form-control"/>
                                      </div>

                                      <div className="row top-margin">
                                          <div className="col-sm-6">
                                              <label>Password <span className="text-danger">*</span></label>
                                              <input type="text" onChange={handleChange} name="password" class="form-control"/>
                                          </div>
                                          <div className="col-sm-6">
                                              <label>Confirm Password <span class="text-danger">*</span></label>
                                              <input type="text" class="form-control"/>
                                          </div>
                                      </div>

                                      <hr/>

                                      <div className="row">
                                          <div className="col-lg-8">
                                              <label className="checkbox">
                                                  <input type="checkbox"/>
                                                  I've read the <a href="page_terms.html">Terms and Conditions</a>
                                              </label>
                                          </div>
                                          <div class="col-lg-4 text-right">
                                              <button className="btn btn-action" type="submit">Register</button>
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
