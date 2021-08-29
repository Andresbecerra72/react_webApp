
import React from 'react'



// en la funcion se usa desestructuracion por que viene el objeto img
export const GifGridItem = ( {id, title, url} ) => {
    
    
    
    return (
        <div className="card animate__animated animate__fadeIn">

           <img src={url} alt={ title }/>
           <p>{ title }</p>
            
        </div>
    )
}// End Component
