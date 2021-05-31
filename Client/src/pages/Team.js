import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Team extends React.Component{
    render(){
        return(
            <div>
                <Header/>
	            <div className="container">

	            	<ol className="breadcrumb">
            			<li><Link to ='/'>Accueil</Link></li>
			            <li className="active">Equipe</li>
            		</ol>

		            <div className="row">
			
			            <article className="col-md-8 maincontent">
				            <header className="page-header">
					            <h1 className="page-title">Notre équipe</h1>
				            </header>
				            <p style={{fontFamily:'bold', fontSize :25}}>Nous vous remercions d'avoir choisi notre application pour fidéliser vos clients.</p>
                            <br/><br/><br/><br/>
                            <p style={{color :'Red', fontFamily:'bold', fontSize :25}}>Vous pouvez nous contacter sur les addresses emails suivantes :</p> <br/>
                           <table>
                               <tr style={{fontFamily:'bold', fontSize :25}}>
                                   Saoussen.Khalladi@ensi-uma.tn
                               </tr>
                               <tr style={{fontFamily:'bold', fontSize :25}}>
                               bassem.elghoul@ensi-uma.tn
                               </tr>
                               <tr style={{fontFamily:'bold', fontSize :25}}>
                                sarah.gharbi@ensi-uma.tn
                               </tr>
                           </table>

				             </article>

			
	
			            <aside className="col-md-4 sidebar sidebar-right">

                            <div className="row widget">
                                <div className="col-xs-12">
                                    <h4>Saoussen Khalladi</h4>
                                    <p><img src="assets/images/sawsen.jpg" alt=""/></p>
                                </div>
                            </div>
                            <div className="row widget">
                                <div className="col-xs-12">
                                    <h4>Bassem Elghoul</h4>
                                    <p><img src="assets/images/bassem.jpg" alt=""/></p>
                                    
                                </div>
                            </div>
                            <div className="row widget">
                                <div className="col-xs-12">
                                    <h4>Sarah Gharbi</h4>
                                    <p><img src="assets/images/sarah.jpg" alt=""/></p>
                                    
                                </div>
                            </div>

			            </aside>
       

		            </div>
	            </div>
                <Footer/>
            </div>
        )
    }
}

export default Team