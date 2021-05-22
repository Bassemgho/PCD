
import react,{useState,useEffect} from 'react';
import Ptvente from './Ptvente';
import * as api from '../api/index.js';

const Affichage =() => {


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


const delete1 = async (index,id_ptvent)=> {
    let listee = Array.from(get);
   // console.log(listee);
    // listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);
<<<<<<< HEAD
    await api.deleteptvente(id_ptvent,localStorage.getItem('token'));
    
=======
    const token = localStorage.getItem("token");
    await api.deleteptvente(id_ptvent,token);
    const {data} = await api.getptvente(token);
    setGet(data);
>>>>>>> d20eca11dd274505fd4b42660b584c60319b3c17
}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Ptvente key={index} {...item} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affichage
