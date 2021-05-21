
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
                          <Eventg key={index} nom={item.nom} lieu={item.lieu} jourdebut={item.jourdebut} moisdebut={item.moisdebut} andebut={item.andebut} jourfin={item.jourfin} moisfin={item.moisfin} anfin={item.anfin} heuredebut={item.heuredebut} mindebut={item.mindebut} heurefin={item.heurefin} minfin={item.minfin} delete={delete1} index={index} />
                         )
                       })}
                    </div>
    )
}
export default Affevent