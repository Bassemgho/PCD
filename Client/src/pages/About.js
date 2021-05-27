import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class About extends React.Component {
   render(){
        return(
            <div>
				<Header/>
				
	            <div className="container">
		            <ol className="breadcrumb">
			            <li><Link to ="/">Accueil</Link></li>
			            <li className="active">A propos de nous</li>
		            </ol>

		            <div className="row">
			
			            <article className="col-sm-8 maincontent">
				            <header className="page-header">
					            <h1 className="page-title">UNIFID</h1>
				            </header>
				            <h3>Ancien programme de fidélisation</h3>
							<br/>
				            <p><img src="assets/images/imm.jpeg" alt="" className="img-rounded pull-right" width="300" /> Chaque entreprise propose à ses clients une carte de fidélité physique pour gagner des points à chaque achat. </p>
				            <p>Avoir plusieurs cartes de fidélité dans un portefeuille n'est plus pratique. Il est aussi difficile de vérifier les points cumulés dans chaque carte.</p>
				            <br/><br/><br/>
							 <h3>Nouveau programme de fidélisation</h3>
				            <p>Il n'est plus nécessaire de porter avec vous toutes vos cartes de fidélité. Grâce à notre application vous aurez la chance d'avoir toutes les cartes de nos entreprises partenaires dans vos smartphones.<br/>
								Si vous êtes une entreprise et vous cherchez le confort de vos clients il suffit de créer un compte dans la page <Link to ="/signup">S'inscrire </Link>.
								<br/> L'entreprise a le droit de paramétrer sa carte de fidélité, d'ajouter des offres et des cadeaux, d'ajouter ses points de vente et de créer des événements.
								Elle serait capable aussi de consulter les statistiques.	
							</p>
				            
			            </article>
	

		            </div>
</div>

					<Footer/>
            </div>
        )
		} 
}

export default About