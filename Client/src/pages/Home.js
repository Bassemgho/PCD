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
			
			            <h3 className="text-center thin">Reasons to use this template</h3>
			
			            <div className="row">
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><h4><i className="fa fa-cogs fa-5"></i>Bootstrap-powered</h4></div>
					            <div className="h-body text-center">
						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquid adipisci aspernatur. Soluta quisquam dignissimos earum quasi voluptate. Amet, dignissimos, tenetur vitae dolor quam iusto assumenda hic reprehenderit?</p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><h4><i className="fa fa-flash fa-5"></i>Fat-free</h4></div>
					            <div className="h-body text-center">
						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi, sequi quis ad fugit omnis cumque a libero error nesciunt molestiae repellat quos perferendis numquam quibusdam rerum repellendus laboriosam reprehenderit! </p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><h4><i className="fa fa-heart fa-5"></i>Creative Commons</h4></div>
					            <div className="h-body text-center">
						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, vitae, perferendis, perspiciatis nobis voluptate quod illum soluta minima ipsam ratione quia numquam eveniet eum reprehenderit dolorem dicta nesciunt corporis?</p>
					            </div>
				            </div>
				            <div className="col-md-3 col-sm-6 highlight">
					            <div className="h-caption"><h4><i className="fa fa-smile-o fa-5"></i>Author's support</h4></div>
					            <div className="h-body text-center">
						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, excepturi, maiores, dolorem quasi reprehenderit illo accusamus nulla minima repudiandae quas ducimus reiciendis odio sequi atque temporibus facere corporis eos expedita? </p>
					            </div>
				            </div>
			            </div> {/*<!-- /row  -->*/}
		
		            </div>
	            </div>
	

	
	            <div className="container">

		            <h2 className="text-center top-space">Frequently Asked Questions</h2>
		            <br/>

		            <div className="row">   
			            <div className="col-sm-6">
				            <h3>Which code editor would you recommend?</h3>
				            <p>I'd highly recommend you Sublime Text - a free to try text editor which I'm using daily. Awesome tool!</p>
			            </div>
			            <div className="col-sm-6">
				            <h3>Nice header. Where do I find more images like that one?</h3>
				            <p>
					        Well, there are thousands of stock art galleries, but personally, 
					        I prefer to use photos from these sites: Unsplash.com
					        and Flickr - Creative Commons</p>
			            </div>
		            </div> 

		            <div className="row">
			            <div className="col-sm-6">
				            <h3>Can I use it to build a site for my client?</h3>
			                	<p>
					                Yes, you can. You may use this template for any purpose, just don't forget about the license, 
					                which says: "You must give appropriate credit", i.e. you must provide the name of the creator and a link to the original template in your work. 
				                </p>
			            </div>
			            <div className="col-sm-6">
				            <h3>Can you customize this template for me?</h3>
				            <p>Yes, I can. Please drop me a line to sergey-at-pozhilov.com and describe your needs in details. Please note, my services are not cheap.</p>
			            </div>
		            </div> 

		            <div className="jumbotron top-space">
			            <h4>Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem doloribus recusandae facere magni ullam suscipit sunt atque rerum eaque iusto facilis esse nam veniam incidunt officia perspiciatis at voluptatibus. Libero, aliquid illum possimus numquam fuga.</h4>
     		            <p className="text-right">Learn more »</p>
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