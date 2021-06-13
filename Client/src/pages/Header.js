import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
<div class="navbar navbar-inverse navbar-fixed-top headroom" >
				<Link to="/" class="navbar-brand">			
                    	Unifid </Link>
		            <div class="container">
			            <div class="navbar-header">
				            <button className="navbar-toggle"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				           
			            </div>
						
			            <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
			
        <ul className="nav navbar-nav pull-right">
            
            <li>
              <NavLink to="/" exact>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" exact>
               A propos de nous
              </NavLink> 
            </li>

            <li>
              <NavLink to="/partenaire" exact>
                Entreprises Partenaires
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" exact>
               Notre équipe
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" exact>
               S'identifier
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" exact>
               S'inscrire
              </NavLink>
            </li>
            <li>
              <NavLink to="/cnxadmin" exact>
               Administrateur
              </NavLink>
            </li>
        </ul>
      </div>
		            </div>
	            </div>
                <header id="head">
                	
	            
		            <div class="container">
			            <div class="row">
                    <br/>
				            <h1 class="lead">CARTE DE FIDELITÉ UNIVERSELLE</h1>
                    <br/>
				            <p class="tagline">UNIFID: meilleur programme de fidélisation </p>
			            </div>
		            </div>
	            </header>
                </div>
        )
    }
}
export default Header;