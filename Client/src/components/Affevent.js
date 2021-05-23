
import react,{useState,useEffect} from 'react';
import Eventg from './Eventg';
import * as api from '../api/index.js';

const Affevent =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getevent(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


const delete1 = async (index,id_ev)=> {
    let listee = Array.from(get);
   // console.log(listee);
    //listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);
    const token = localStorage.getItem("token");
    await api.delevent(id_ev,token);
    const {data} = await api.getevent(token);
    setGet(data);
}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Eventg key={index} {...item} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affevent