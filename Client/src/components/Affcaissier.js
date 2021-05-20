
import react,{useState,useEffect} from 'react';
import Caissier from './Caissier';
import * as api from '../api/index.js';

const Affcaissier =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getcaissier(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


const delete1 = (index)=> {
    let listee = Array.from(get);
   // console.log(listee);
    listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Caissier key={index} name={item.name} nomptvente={item.nomptvente} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affcaissier