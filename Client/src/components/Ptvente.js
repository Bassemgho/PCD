import react from 'react';
import * as api from '../api/index.js';
import { Card} from 'antd';
import Title from 'antd/lib/typography/Title';

import {DeleteOutlined} from '@ant-design/icons';
const Ptvente = (props) => {
    
    const handleClick = ()=>{
            props.delete(props.index)
    }
    return(
        <div>
            <Card bordered style={{ width: 400, float: 'left', margin: 10 }}>
            <table >
                <tr>
                    <td>
                    <p >Nom du point de vente : </p>
                    </td>
                    <td style={{width : 90}}>
                       <p style={{fontWeight :'bold'}}>{props.nom}</p> 
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >addresse : </p> 
                    </td>
                    <td style={{width : 70}}>
                        <p style={{fontWeight :'bold'}}>{props.address}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Horaire :</p>
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
                <tr>
                    <td>
                        <p></p>
                    </td>
                    <td>
                        <p>de</p>
                    </td>
                    <td style={{width : 30}}>
                         <p style={{fontWeight :'bold'}}>{props.jourdebut}</p>
                    </td>
                    <td>
                        <p style={{width : 40}}> à</p>
                    </td>
                    <td style={{width : 30}}>
                        <p style={{fontWeight :'bold'}}>{props.jourfin}</p>
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
export default Ptvente