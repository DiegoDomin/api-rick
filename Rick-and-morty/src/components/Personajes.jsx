import { useEffect,useState} from "react";
import { getCharacter } from "../services/apod.service";

function Personajes (){

    const [name,setName]=useState('');

    useEffect(()=>{
        getData();
        console.log(getData);
    })
    
   const getData=async ()=>{
    return await getCharacter(name);

   }

return(

    <section>
    <h1>Personajes Rick and morty </h1>
    {getData}
                           

    </section>
)
}


export default Personajes;