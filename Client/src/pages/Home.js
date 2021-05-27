import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
class Home extends React.Component{
    render(){
        return(
            <div>
		        
				<Header/>
	            <div className="container text-center">
		            <br/> <br/>
		            <h2 className="thin">Carte de fidelité Universelle</h2>
		            <p className="text-muted">
			            Une seule carte pour toutes les entreprises partenaires:<br/> 
			            Fidéliser ses clients rapidement avec une application mobile. 
		            </p>
	            </div>
	                
	            <div className="jumbotron top-space">
		            <div className="container">
			
			            <h3 className="text-center thin">Raisons pour devenir partenaire</h3>
			
			            <div className="row">
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><i className="fa fa-cogs fa-5"></i></div>
					            <div className="h-body text-center">
						            <p>Paramétrage facile des points de fidélité. </p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><i className="fa fa-flash fa-5"></i></div>
					            <div className="h-body text-center">
						            <p>Consulter les statistiques avec rapidité.</p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><i className="fa fa-heart fa-5"></i></div>
					            <div className="h-body text-center">
						            <p>Ajouter vos offres, vos cadeaux et vos événements.</p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><i className="fa fa-smile-o fa-5"></i></div>
					            <div className="h-body text-center">
						            <p>Voir les commentaires des clients et déduire leur niveau de satisfaction.</p>
					            </div>
				            </div>
			            </div> 
		            </div>
	            </div>
	
	            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	            <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	            <script src="assets/js/headroom.min.js"></script>
	            <script src="assets/js/jQuery.headroom.min.js"></script>
	            <script src="assets/js/template.js"></script>
            <Footer/>
			</div>
        )
    }
}
export default Home