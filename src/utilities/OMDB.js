export const retrieveMovies = async title => {
    try{
        let response = await fetch(`http://www.omdbapi.com/?type=movie&apikey=b4ffe830&s=${title}`);
        if(response.ok){
            let jsonResponse = await response.json();
            return jsonResponse.Search ? jsonResponse.Search.map(movie => {
                return {title: movie.Title,
                        year: movie.Year,
                        imageUrl: movie.Poster,
                        id: movie.imdbID}
            }) : []

        }
        throw new Error('Request failed.')
    }
    catch(error){
        console.log(error);
    }
}