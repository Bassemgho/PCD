
import react,{useState,useEffect} from 'react';
import * as api from '../api/index.js';

const Affptcaiss =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getptvente(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


    return(
        <div>
               <select name="pt" size="1">
             
                       {get.map((item, index)=>{
                         return(
                            <option value={item._id}>{item.nom}</option>
                         )
                       })}
                       </select>
                    </div>
    )
}
export default Affptcaiss