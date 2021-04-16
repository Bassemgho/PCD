import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
				<div class="navbar navbar-inverse navbar-fixed-top headroom" >
		            <div class="container">
			            <div class="navbar-header">
				            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				            <Link to="/" class="navbar-brand">
                            <img src="assets/images/logo.png" alt="Progressus HTML5 template"/>
                            </Link>
			            </div>
			            <div class="navbar-collapse collapse">
				            <ul class="nav navbar-nav pull-right">
					            <li><Link to="/">Home</Link></li>
					            <li><Link to="/about">About</Link></li>
								{/*<li class="active"><Link to="/about">About</Link></li>*/}

					            {/*<li class="dropdown">
									
						            <a href="#" class="dropdown-toggle" data-toggle="dropdown">More Pages <span class="dropdown-toggle" aria-hidden="true"></span><b class="caret"></b></a>
						            
									<ul class="dropdown-menu">
							            <li><a href="sidebar-left.html">Left Sidebar</a></li>
							            <li><a href="sidebar-right.html">Right Sidebar</a></li>
						            </ul>
								</li>*/}

								<li><Link to="/left">Left Sidebar</Link></li>
								<li><Link to="/right">Right Sidebar</Link></li>

					            <li><Link to="/contact">Contact</Link></li>
					            <li><Link to="/signin">SIGN IN </Link></li>
								<li><Link to="/signup">SIGN UP</Link></li>

				            </ul>
			            </div>
		            </div>
	            </div>
                <header id="head">
                	
	            
		            <div class="container">
			            <div class="row">
				            <h1 class="lead">AWESOME, CUSTOMIZABLE, FREE</h1>
				            <p class="tagline">PROGRESSUS: free business bootstrap template by <a href="http://www.gettemplate.com/?utm_source=progressus&amp;utm_medium=template&amp;utm_campaign=progressus">GetTemplate</a></p>
				            <p><a class="btn btn-default btn-lg" role="button">MORE INFO</a> <a class="btn btn-action btn-lg" role="button">DOWNLOAD NOW</a></p>
			            </div>
		            </div>
	            </header>
            </div>
        )
    }
}

export default Header