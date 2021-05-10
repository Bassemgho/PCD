import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <div>
				<Header/>
	            <div className="container">

		            <ol className="breadcrumb">
			            <li><Link to='/'>Accueil</Link></li>
			            <li className="active">Contact</li>
		            </ol>

		            <div className="row">
			
			            <article className="col-sm-9 maincontent">
				            <header className="page-header">
					            <h1 className="page-title">Contactez-nous</h1>
				            </header>
				
				            <p>
							Merci de nous envoyer vos remarques et toutes vos questions. Remplissez le formulaire ci-dessous et nous répondrions à vos questions dès que possible. Veuillez nous accorder qulques jours pour répondre.
			            	</p>
				            <br/>
					        <form>
						        <div className="row">
							        <div className="col-sm-4">
								        <input className="form-control" type="text" placeholder="Nom"/>
						        	</div>
							        <div className="col-sm-4">
								        <input className="form-control" type="text" placeholder="Email"/>
						        	</div>
							        <div className="col-sm-4">
								        <input className="form-control" type="text" placeholder="Téléphone"/>
							        </div>
						        </div>
						        <br/>
						        <div className="row">
							        <div className="col-sm-12">
								        <textarea placeholder="Tapez votre message ici..." className="form-control" rows="9"></textarea>
							        </div>
						        </div>
						        <br/>
						        <div className="row">
							        <div className="col-sm-6">
								        <label className="checkbox"><input type="checkbox"/> Sign up for newsletter</label>
							        </div>
							        <div className="col-sm-6 text-right">
								        <input className="btn btn-action" type="submit" value="Envoyer message"/>
							        </div>
						        </div>
					        </form>

			            </article>
			
		
			            <aside className="col-sm-3 sidebar sidebar-right">

				            <div className="widget">
					            <h4>Addresse</h4>
					            <address>
						            2002 Holcombe Boulevard, Houston, TX 77030, USA
					            </address>
					            <h4>Téléphone:</h4>
				            	<address>
						            (713) 791-1414
					            </address>
				            </div>

			            </aside>
			
		                </div>
	            </div>	
	
	            <section className="container-full top-space">
		            <div id="map"></div>
	            </section>
				<Footer/>
            </div>
        )
    }
}

export default Contact