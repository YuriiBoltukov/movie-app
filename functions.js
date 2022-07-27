/**
 * Method for normalizing data from server - movie list
 * @param movies {{
 *          overview: string,
 *          original_language: string,
 *          original_title: string,
 *          video: boolean,
 *          title: string,
 *          genre_ids: number[],
 *          poster_path: string,
 *          backdrop_path: string,
 *          release_date: string,
 *          popularity: number,
 *          vote_average: number,
 *          id: number,
 *          adult: boolean,
 *          vote_count: number}[]}
 * @param genres {{name: string, id: number}[]}
 * @returns {{
 *          overview: string,
 *          original_language: string,
 *          original_title: string,
 *          video: boolean,
 *          title: string,
 *          genre_ids: number[],
 *          genres: {name: string, id: number}[],
 *          poster_path: string,
 *          backdrop_path: string,
 *          release_date: string,
 *          popularity: number,
 *          vote_average: number,
 *          id: number,
 *          adult: boolean,
 *          vote_count: number}[]}
 */
function normalizeMovieList(movies, genres) {
    return movies.map(movie => {
        movie['genres'] = movie.genre_ids.map(genreId => genres.find(genre => genre.id === genreId));
        return movie;
    });
}