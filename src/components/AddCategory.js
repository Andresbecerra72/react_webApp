
import React, { useState } from 'react'
import PropTypes from 'prop-types'


// funcion del componente
export const AddCategory = ({ setCategories }) => {

    


    const [inputValue, setinputValue] = useState('');

    // handle del texto que ingresa en el input
    const handleInputCahange = (e) => {

        // e.target.value: es el evento del componente Input
        setinputValue(e.target.value); // renderiza el Input
    }

    // handle del input cuando se realiza un enter
    const handleSubmit = (e) => {

        e.preventDefault(); // evita el comportamiento del form cuando intenta recargar nuevamente la pagina

        // validacion del Input
        if ( inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setinputValue(''); // limpia el Input
            
        }
       


    }



    // --------retorno del componente----------------
    return ( // fragment <> se retorna un componente completo
        <form onSubmit={ handleSubmit }>

            <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputCahange }
            />

        </form>


    )




} // End Component



// PropTypes
AddCategory.protoTypes = { // hace obligatorio el uso de la funcion setCategories en el componente
    setCategories: PropTypes.func.isRequired
}