import react from 'react';
import * as api from '../api/index.js';
import { Card} from 'antd';

import {DeleteOutlined} from '@ant-design/icons';

const Eventg = (props) => {
    
    const handleClick = ()=>{
            props.delete(props.index,props._id)
    }
    return(
        <div>
            <Card bordered style={{ width: 550, float: 'left', margin: 10 }}>
            <table >
                <tr>
                    <td>
                    <p >Nom de l'événement : </p>
                    </td>
                    <td style={{width : 90}}>
                       <p style={{fontWeight :'bold'}}>{props.nom}</p> 
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >Lieu : </p> 
                    </td>
                    <td style={{width : 70}}>
                        <p style={{fontWeight :'bold'}}>{props.lieu}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Date :</p>
                    </td>
                    <td >
                       <p>de </p>
                    </td>
                    <td style={{width : 120}}>
                        <p style={{fontWeight :'bold'}}>{props.jourdebut}/{props.moisdebut}/{props.andebut}</p>
                    </td>
                    <td style={{width : 40}}>
                       <p> Jusqu'à</p>
                    </td>
                    <td style={{width : 120}}>
                        <p style={{fontWeight :'bold'}}>{props.jourfin}/{props.moisfin}/{props.anfin}</p>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <p>Heure :</p>
                    </td>
                    <td >
                       <p>de </p>
                    </td>
                    <td>
                        <p style={{fontWeight :'bold'}}>{props.heuredebut}:{props.mindebut}</p>
                    </td>
                    <td style={{width : 40}}>
                       <p> à</p>
                    </td>
                    <td>
                        <p style={{fontWeight :'bold'}}>{props.heurefin}:{props.minfin}</p>
                    </td>
                    
                </tr>
               
            </table>
            <Card.Grid style={{ width: '100%' }}>
                <button style={{width: 120, color :'red' , fontWeight :'bold'}} onClick={handleClick}><DeleteOutlined /> supprimer</button>
                </Card.Grid>
    
            </Card>
            
        </div>
    )
}
export default Eventg