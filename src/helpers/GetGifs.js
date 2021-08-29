





// funcion que consulta el API de GIPHY
// estafuncion al ser ASYNC devuelve una promesa
export const getGift = async(category) => {

    // encodeURI() es una funcion que escapa los espacios

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=ClvBt8X8PmQoUrP9vO4mmjTPUMDQ0Htm`;
    const resp = await fetch( url );
    const { data } = await resp.json(); // se usa la desestructuracion para recibir solo la data

    const gifts = data.map( img => { // solo trae la informacion necesaria del API

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifts); 
   
    return gifts;

}