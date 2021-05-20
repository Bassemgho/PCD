import react from 'react';

import { Card} from 'antd';
import Title from 'antd/lib/typography/Title';

import * as api from '../api/index.js';

import {DeleteOutlined} from '@ant-design/icons';

const Caissier = (props) => {
    
    const handleClick = ()=>{
            props.delete(props.index)
    }
    return(
        <div>
           
            <Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
            <table >
                <tr>
                    <td>
                    <p >Nom du point de vente : </p>
                    </td>
                    <td style={{width : 90}}>
                       <p style={{fontWeight :'bold'}}>{props.nomptvente}</p> 
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >Nom caissier : </p> 
                    </td>
                    <td style={{width : 130}}>
                        <p style={{fontWeight :'bold'}}>{props.name}</p>
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
export default Caissier