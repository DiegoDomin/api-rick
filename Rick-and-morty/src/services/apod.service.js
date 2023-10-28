import axios from "axios";

//base de la consulta
const getData=async(query)=>{
    try{

        const response=await axios.get(`/character?${query}`);
            const results =response.data||[];

        if(results.status===200){
            return Array.isArray(results) ?results: [results]
        }
        else{
            return [];
        }
    }catch(error){
        console.error("ha habido un error,no se cual pero hay",error)
        return [];
    }

}

export const getCharacter =async(name)=>{
    try{
    const queryParams =new URLSearchParams();
   queryParams.append('name',name);
    return await getData(queryParams.toString());
}catch(error){
    return[]
}



}
