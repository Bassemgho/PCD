import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="footer" class="top-space">

                    <div class="footer1">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-3 widget">
                                    <h3 class="widget-title">Contact</h3>
                                    <div class="widget-body">
                                        <p>+234 23 9873237<br/>
                                            <a href="mailto:#">some.email@somewhere.com</a><br/>
                                            <br/>
                                            234 Hidden Pond Road, Ashland City, TN 37015
                                        </p>	
                                    </div>
                                </div>

                                <div class="col-md-3 widget">
                                    <h3 class="widget-title">Follow me</h3>
                                    <div class="widget-body">
                                        <p class="follow-me-icons">
                                            <a href=""><i class="fa fa-twitter fa-2"></i></a>
                                            <a href=""><i class="fa fa-dribbble fa-2"></i></a>
                                            <a href=""><i class="fa fa-github fa-2"></i></a>
                                            <a href=""><i class="fa fa-facebook fa-2"></i></a>
                                        </p>	
                                    </div>
                                </div>

                                <div class="col-md-6 widget">
                                    <h3 class="widget-title">Text widget</h3>
                                    <div class="widget-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores, quibusdam architecto voluptatem amet fugiat nesciunt placeat provident cumque accusamus itaque voluptate modi quidem dolore optio velit hic iusto vero praesentium repellat commodi ad id expedita cupiditate repellendus possimus unde?</p>
                                        <p>Eius consequatur nihil quibusdam! Laborum, rerum, quis, inventore ipsa autem repellat provident assumenda labore soluta minima alias temporibus facere distinctio quas adipisci nam sunt explicabo officia tenetur at ea quos doloribus dolorum voluptate reprehenderit architecto sint libero illo et hic.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="footer2">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-6 widget">
                                    <div class="widget-body">
                                        <p class="simplenav">
                                        
                                            <Link to="/">Home</Link> | 
                                            <Link to="/about">About</Link> |
                                            <Link to="/left">Left Sidebar</Link> |
								            <Link to="/right">Right Sidebar</Link> |
                                            <Link to="/contact">Contact</Link> |
                                            <b><Link to="/signin">SIGN IN </Link></b> |
                                            <b><Link to="/signup">SIGN UP</Link></b>
                                        </p>
                                    </div>
                                </div>

                                <div class="col-md-6 widget">
                                    <div class="widget-body">
                                        <p class="text-right">
                                            Copyright &copy; 2014, Your name. Designed by <a href="http://gettemplate.com/" rel="designer">gettemplate</a> 
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