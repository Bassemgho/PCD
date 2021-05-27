import react from 'react';

import { Card} from 'antd';

import * as api from '../api/index.js';

import {DeleteOutlined} from '@ant-design/icons';

const Entrep = (props) => {
    
    const handleClick = ()=>{
            props.delete(props.index,props._id)
    }
    return(
        <div>
            <Card bordered style={{ width: 300, height: 200, float: 'left', margin: 10 }}>
            <table >
                <tr>
                    <td>
                    <p >Logo : </p>
                    </td>
                    <td style={{width : 90}}>
                        <p style={{textAlign:'center'}}>
							<img src={props.logo}  width="100" height="100" />
						</p>
                    </td>
                </tr>
                <tr>
                    <td>
                       <p >Nom entreprise : </p> 
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
export default Entrep