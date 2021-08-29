import React from 'react'


import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGift } from '../helpers/GetGifs';




export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { data: images, loading } = useFetchGifs( category );
    // data: images se pueden renombrar los parametros en la desestructuracion

    // console.log(data);


    // useEffect es usado para disparar la consulta al API una sola ves,
    // se debe enviar el segundo arguemento '[]' 
    // useEffect(() =>{
    //     getGift(category) // llama la funcion de helpers/GetGifs.js
    //         .then( setImages );
    // }, [ category ]);






    // -------retorno del componente----------------
    return (
        <>
         <h3 className="animate__animated animate__fadeIn">{ category }</h3>  

        <div className="card-grid">

        { /*loading? 'Cargando...': 'Data OK'; */} 

        {loading && <p className="animate__animated animate__flash">Loading...</p>}


        { 
        
            images.map( img => ( 

                      <GifGridItem 
                      key={ img.id }
                      { ...img } // se envia un clone del Objeto img
                    //   img={ img }
                      />

                       ))
            
                }
        </div>
          
                
            

        </>
    )
}// End Component
