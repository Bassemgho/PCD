

import React , {useState, useEffect,Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

import {Link} from 'react-router-dom';
import { Card} from 'antd';
import Title from 'antd/lib/typography/Title';



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
			<table style={{marginLeft :'auto', marginRight :'auto'}}>
				<tr>
				  <td>
					<Card bordered style={{ width: 300, height: 200, float: 'left', margin: 10 }}>
			  			<br/>
				  		<p style={{textAlign:'center'}}>
							<img src={post.logo}  width="100" height="100" />
						</p>
						<Card.Grid style={{ width: '100%' }}>
							<Title level={4} style={{textAlign :'center'}} > {post.name}</Title>
						</Card.Grid>
			  		</Card>
				  </td>
			  </tr>				
		 	 </table>
			 	 <hr></hr>
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
			<div>
          		{this.displayBlogPost(this.state.posts)}
       		</div>
			
			<Footer/>	
		</div>
	);
}
}

export default Partenaire

