import { useEffect, useState } from "react";
const URL ="https://api.tvmaze.com/shows";
export default function useCharacters(){
    const[Shows,setShows]= useState([]);
    const [loading,setloading]=useState(true);
    const [error,setError]= useState("");

    async function loadShows(){
        try{
            setloading(true);
            setError("");
            const response = await fetch(URL);
            if(!response.ok){
            throw new Error ('Error al consultar la API');
            }
            const data =await response.json();
            const formattedShows =data.slice(0,10).map (item => ({
                id: item.id,
                title:item.name,
                image:item.image?.medium ||null,
                genres:DataTransferItemList.genres || [],
                premiered:item.premiered ||'No disponible',
                description:item.description ||'Sin descripcion'
            })
            .replace(/<[^>] *>/g,"")
        );
        setShows(formattedShows);
        }catch(e){
            setError('no se pudieron cargar las series revis internet');
        }finally{
            setloading(false);
        }
}

useEffect(c) =>{
    loadShows();
}[]);
return {Shows, loading,error.loadShows};

}