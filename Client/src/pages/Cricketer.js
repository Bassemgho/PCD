import React from 'react';
import { Card} from 'antd';
import Title from 'antd/lib/typography/Title';
export const Cricketer = (props) =>{

	
	return(
		<Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
				<br/>
				<p style={{textAlign :'center'}}>Nom du client:</p>

			<Title level={4} style={{textAlign :'center'}} > {props.username}</Title>
			<hr></hr>
			
			<table>
				<tr>
					<td style={{width : 80}}>
						<p style={{textAlign : 'center'}}>Téléphone : </p>
					</td>	
					<td>
						<p style={{textAlign : 'center' ,fontWeight :'bold'}}> {props.phonenumber}</p>
					</td>
				</tr>
				<tr>
					<td>
						<p style={{textAlign : 'center'}}>Email : </p>
					</td>
					<td style={{width : 100}}>
						<p style={{textAlign : 'center', fontWeight :'bold'}}> {props.email}</p>
					</td>
				</tr>
				
			</table>
			
				<hr></hr>
			<Card.Grid style={{ width: '100%' }}>
				<p style={{textAlign :'center'}}>Nombre de points :</p>
					<Title level={4} style={{textAlign :'center'}}> {props.solde}</Title>
			</Card.Grid>
			
		</Card>
	)
	
}

