import React , {useEffect,useState} from 'react';
import * as api from '../api/index.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import Header from './Header';
import Footer from './Footer';

import {Link} from 'react-router-dom';


const Partenaire = () => {

	const[entreprises,setEntreprises] = useState ([]);
	const [test,setTest] = useState ("");
	useEffect (async () => {
		const ent = await api.getentreprise();
		if (!test){
			setEntreprises (ent.data);
			console.log(entreprises);
		}
		else{
			
			console.log("else");}
	},[test])

	return(
		<div>
			<Header/>
			<ol className="breadcrumb">
					<li><Link to ='/'>Accueil</Link></li>
					<li className="active">Nos partenaires</li>
			</ol>
		
			<div>

				
			</div>
			
		
			<Footer/>	
		</div>
	);
}


export default Partenaire