
import react,{useState,useEffect} from 'react';
import Redget from './Redget';
import * as api from '../api/index.js';

const Affred =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getredparams(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


const delete1 = async (index, id_red)=> {
    let listee = Array.from(get);
   // console.log(listee);
    listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);
    const token = localStorage.getItem("token");
    await api.deletered(id_red,token);
    const {data} = await api.getredparams(token);
    setGet(data);}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Redget key={index} {...item} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affred