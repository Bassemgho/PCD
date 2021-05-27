
import react,{useState,useEffect} from 'react';
import Entrep from './Entrep';
import * as api from '../api/index.js';

const Affentrep =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getentreprise(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


const delete1 = async(index,id_ent)=> {
    let listee = Array.from(get);
   // console.log(listee);
    //listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);
    const token = localStorage.getItem("token");
    await api.deleteentreprise(id_ent,token);
    const {data} = await api.getentreprise(token);
    setGet(data);
}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Entrep key={index} {...item} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affentrep