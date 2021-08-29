

// snipped para crear el componente "rafc"

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

// no se pueden usar const cuando queremos cambiar el valor
// las const no son mutables, se usan 'useState'
//const categories = ['Hola', 'como', 'estas'];




export const GifExpertApp = () => {

    // los useState deben estar dentro del componente
    const [categories, setCategories] = useState(['Rock']);
    // setCategories: este parametro sirve para renderizar el componente
    // y que se actulice nuevamente el componente

    // const handled = () => {

    //     //console.log('AQUI');
    //     setCategories([...categories, 'Aqui']); // esta funcion cambia todos los datos del useState
    //     console.log(categories);

    // }


// ------------retorna el componente HTML-----------------------------
    return ( // <> fragment
        <> 

            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
             {
                 categories.map(category => (

                     <GifGrid
                     key={ category } 
                     category={ category }
                      />
                 ))
             }

            </ol>

            
        </>
    )
}
