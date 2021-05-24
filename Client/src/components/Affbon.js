
import react,{useState,useEffect} from 'react';
import Bonget from './Bonget';
import * as api from '../api/index.js';

const Affbon =() => {


    const [get,setGet] = useState([]);

    useEffect (async () => {

    const token = localStorage.getItem("token");
    try {
    const {data} = await api.getbonparams(token);
    console.log(data);
    setGet(data);
    } catch (e) {
    console.log(e.error);
    }
    },[])


const delete1 = async (index, id_bon)=> {
    let listee = Array.from(get);
   // console.log(listee);
    //listee.splice(index,1);
    //console.log(listee);
    setGet(listee);
    console.log(listee);
    const token = localStorage.getItem("token");
    await api.deletebon(id_bon,token);
    const {data} = await api.getbonparams(token);
    setGet(data);
}

    return(
        <div style={{textAlign : 'center'}}>
                       {get.map((item, index)=>{
                         return(
                          <Bonget key={index} {...item} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affbon