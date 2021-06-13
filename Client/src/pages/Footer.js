import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="footer" className="top-space">

                    <div className="footer1">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-3 widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-body">
                                        <p><br/>
                                            <a href="mailto:#">pcdfid@gmail.com</a><br/>
                                            <br/>
                                        </p>	
                                    </div>
                                </div>

                                
                                <div className="col-md-6 widget">
                                    <h3 className="widget-title">UNIFID</h3>
                                    <div className="widget-body">
                                        <p>Carte de fidélité universelle</p>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="footer2">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6 widget">
                                    <div className="widget-body">
                                        <p className="simplenav">
                                        
                                            <Link to="/">Accueil</Link> | 
                                            <Link to="/about">A propos de nous</Link> |
                                            <Link to="/partenaire">Entreprises partenaires</Link> |
								            <Link to="/team">Notre équipe</Link> |
                                            <b><Link to="/signin">S'identifier </Link></b> |
                                            <b><Link to="/signup">S'inscrire</Link></b>|
                                            <b><Link to="/cnxadmin">Administrateur</Link></b>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 widget">
                                    <div className="widget-body">
                                        <p className="text-right">
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </footer>	
            </div>
        )
    }
}

export default Footer