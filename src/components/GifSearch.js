import React from "react";

function GifSearch ({updateSearchTermInState}) {
    // It will also render a GifSearch component that renders the form. GifListContainer should pass down a submit handler function to GifSearch as a prop.

    function handleSubmit (event) {
        event.preventDefault();
        console.log(event.target[0].value) //works, grabs typed input
        updateSearchTermInState(event.target[0].value);
    }

    return (
        <>
        <div>gifsearch</div>
        <form onSubmit={handleSubmit}>
            <input />
            <button>Submit</button>
        </form>
        </>
    )
}

export default GifSearch;