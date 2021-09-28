import React, {useState, useEffect} from  'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer () {
    // In our app, the GifListContainer will be responsible for fetching the data from the Giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the GifList component, as a prop.
    
    // It will also render a GifSearch component that renders the form. GifListContainer should pass down a submit handler function to GifSearch as a prop.

    const [gifsThree, setGifsThree] = useState([]);
    const[gifSearchTerm, setGifSearchTerm] = useState('dogs');
    const SEARCH_URL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q=" + gifSearchTerm;

    useEffect ( () => {
        fetch(SEARCH_URL)
        .then(response => response.json())
        .then(json => setGifsThree(json.data.slice(0,3)))
    }, [gifSearchTerm])

    // function gifListFactory(data) {
    //     let fullResponseArray =  data.map(each => {
    //         return each.images.original.url;
    //     })
    //     //console.log(fullResponseArray); //works!

    //     const threeGifArray = fullResponseArray.slice(0,3);
    //     console.log('threegifarray', threeGifArray); //working!
    //     setGifsThree([threeGifArray]);
    //     console.log('gifsthree', gifsThree)
    // }

    return (
        <>
        <p>{"gif list container"}</p>
        <GifList threeGifs={gifsThree} />
        <GifSearch updateSearchTermInState={setGifSearchTerm}/>
        </>
    )
}

export default GifListContainer;