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
                                        <p>+234 23 9873237<br/>
                                            <a href="mailto:#">pcdfid@gmail.com</a><br/>
                                            <br/>
                                            234 Hidden Pond Road, Ashland City, TN 37015
                                        </p>	
                                    </div>
                                </div>

                                <div className="col-md-3 widget">
                                    <h3 className="widget-title">Follow me</h3>
                                    <div className="widget-body">
                                        <p className="follow-me-icons">
                                            <a href=""><i className="fa fa-twitter fa-2"></i></a>
                                            <a href=""><i className="fa fa-dribbble fa-2"></i></a>
                                            <a href=""><i className="fa fa-github fa-2"></i></a>
                                            <a href=""><i className="fa fa-facebook fa-2"></i></a>
                                        </p>	
                                    </div>
                                </div>

                                <div className="col-md-6 widget">
                                    <h3 className="widget-title">Text widget</h3>
                                    <div className="widget-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores, quibusdam architecto voluptatem amet fugiat nesciunt placeat provident cumque accusamus itaque voluptate modi quidem dolore optio velit hic iusto vero praesentium repellat commodi ad id expedita cupiditate repellendus possimus unde?</p>
                                        <p>Eius consequatur nihil quibusdam! Laborum, rerum, quis, inventore ipsa autem repellat provident assumenda labore soluta minima alias temporibus facere distinctio quas adipisci nam sunt explicabo officia tenetur at ea quos doloribus dolorum voluptate reprehenderit architecto sint libero illo et hic.</p>
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
                                            <Link to="/contact">Contact</Link> |
                                            <b><Link to="/signin">S'identifier </Link></b> |
                                            <b><Link to="/signup">S'inscrire</Link></b>
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