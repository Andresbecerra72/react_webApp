
import { useEffect, useState } from "react";
import { getGift } from "../helpers/GetGifs";

// Un hook solo es una funcion 
/*
   CUSTOM HOOK
*/



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({

        data: [],
        loading: true

    })



    // useEffect es usado para disparar la consulta al API una sola ves,
    // se debe enviar el segundo arguemento '[]' 
    useEffect(() =>{
        getGift(category) // llama la funcion de helpers/GetGifs.js
            .then( imgs => {

             
                setState({
                    data: imgs,
                    loading: false
                })
          


            } );
    }, [ category ]);


    // setTimeout(() => {
        
    //     setState({

    //         data: [1,2,3,4,5],
    //         loading: false
    
    //     });

    // }, 3000);


    return state;





    
}
