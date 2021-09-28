import React from "react";

function GifList ({threeGifs}) {
    // In our app, the GifListContainer will be responsible for fetching the data from the Giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the GifList component, as a prop.

console.log(threeGifs)

    return (
        <>
        <div>giflist</div>
        {threeGifs.map(each => <img key={each.id} src={each.images.original.url} alt={"gif"} /> )}
        </>
    )
}

export default GifList;