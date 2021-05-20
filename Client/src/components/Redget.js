import react from 'react';

import { Card} from 'antd';
import Title from 'antd/lib/typography/Title';

import * as api from '../api/index.js';

import {DeleteOutlined} from '@ant-design/icons';

const Redget = (props) => {
    
    const handleClick = ()=>{
            props.delete(props.index)
    }
    return(
        <div>
           
            <Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
            <table >
                <tr>
                    <td>
                    <p >Nombre de points : </p>
                    </td>
                    <td style={{width : 90}}>
                       <p style={{fontWeight :'bold'}}>{props.ptsred}</p> 
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >Pourcentage : </p> 
                    </td>
                    <td style={{width : 130}}>
                        <p style={{fontWeight :'bold'}}>{props.percent}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >Validité en mois : </p> 
                    </td>
                    <td style={{width : 130}}>
                        <p style={{fontWeight :'bold'}}>{props.delaired}</p>
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
export default Redget