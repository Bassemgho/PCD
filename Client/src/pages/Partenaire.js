

import React , {useState, useEffect,Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

import {Link} from 'react-router-dom';



class Partenaire extends React.Component{

	state = {
		name: '',
		logo: '',
		posts: []
	  };
	
	  componentDidMount = () => {
		this.getBlogPost();
	  };
	
	
	  getBlogPost = () => {
		axios.get("http://localhost:5000/entreprise/display")
		  .then((response) => {
			const data = response.data;
			this.setState({ posts: data });
			console.log('Data has been received!!');
		  })
		  .catch(() => {
			alert('Error retrieving data!!!');
		  });
	  }
	
	 

	
	  displayBlogPost = (posts) => {
	
		if (!posts.length) return null;
	
	
		return posts.map((post, index) => (
		  <div key={index} >
			<h3 style ={{fontFamily : 'Monaco'}}>{post.name}</h3>
			<p>
			<img src={post.logo}  width="300" /></p>
			<b style={{color: 'red'}}>* * * * *</b>
		  </div>
		));
	  };

	
	render(){
		console.log('State: ', this.state);
	return(
		<div>
			<Header/>
			<ol className="breadcrumb">
					<li><Link to ='/'>Accueil</Link></li>
					<li className="active">Nos partenaires</li>
			</ol>
			<br/>
			<br/><br/>
			<div style={{textAlign : 'center'}}>
          {this.displayBlogPost(this.state.posts)}
        </div>
			
			<Footer/>	
		</div>
	);
}
}

export default Partenaire

