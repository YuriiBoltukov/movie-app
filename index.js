const movieList = {...data, results: normalizeMovieList(data.results, genres)};
const content = document.querySelector('.content');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

async function getGenres () {
    const genresJson = await fetch('https://api.themoviedb.org/3/genre/movie/list?&api_key=99621527e8941a7599142285b313f7bf&page=1&region=RU&language=ru-RU');
    const genres = await genresJson.json();
    return genres.genres;
}

async function main () {
    const genres = await getGenres();
    const movies = await getData(genres);
    createLayout(movies.results);

    searchBtn.addEventListener('click', async () => {
        const searchStr = searchInput.value;
        if(searchStr) {
            removeLayot();
            const movies = await getData(genres, searchStr);
            createLayout(movies.results);
        }
    });
    document.body.addEventListener('keyup', async event => {
        event.preventDefault();
        event.stopPropagation()
        if (event.code === 'Enter') {
            const searchStr = searchInput.value;
            if(searchStr) {
                removeLayot();
                const movies = await getData(genres, searchStr);
                createLayout(movies.results);
            }
        }
    });
    searchInput.addEventListener('keydown', async event => {
        if (event.code === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            const searchStr = searchInput.value;
            if(searchStr) {
                removeLayot();
                const movies = await getData(genres, searchStr);
                createLayout(movies.results);
            }
        }
    });
}

function removeLayot() {
    content.innerHTML = '';
}

async function getData (genres, query = '') {
    const dataJson = await fetch(`https://api.themoviedb.org/3/${query ? 'search' : 'discover'}/movie?sort_by=popularity.desc&api_key=99621527e8941a7599142285b313f7bf&page=1&region=RU&language=ru-RU&query=${query}`);
    const data = await dataJson.json();
    data.results = normalizeMovieList(data.results, genres);
    return data;
}
/**
 *
 * @param data {{
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
 *          vote_count: number}}
 * @returns {HTMLDivElement}
 */
function createCard (data) {
    const card = document.createElement('div');
    card.classList.add('col', 'd-flex', 'justify-content-center');
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w1280${data.poster_path}" class="card-img-top" alt=${data.title}>
            <div class="card-body">
                <h5 class="card-title fs-2"><strong>${data.title}</strong></h5>
        
                <div class="pt-2 pb-2">
                    <span class="badge ${defineBageClass(data.vote_average)} fs-5 p-1">${data.vote_average}</span>
                    ${createGenreBages(data.genres)}
                </div>
        
                <p class="card-text pt-3">${data.overview}</p>
        
                <a href="./detail.html?id=${data.id}" class="btn btn-primary">Больше информации</a>
            </div>
        </div>
    `;
    return card;
}

/**
 *
 * @param data {{name: string, id: number}[]}
 */
function createGenreBages(data){
    return data.reduce((result,genre) => {
        return result += `
            <span class="badge bg-primary fs-5 p-1 mt-1">${genre.name}</span>
        `;
    }, '')
}

function createCardRow () {
    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'mt-2');
    return cardRow;
}

/**
 *
 * @param data {{
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
function createLayout (data) {
    for (let i = 0; i < data.length; i += 4){
        const row = createCardRow();
        for (let j = i; j < data.length && j < i + 4; j++){
            row.appendChild(createCard(data[j]));
        }
        content.appendChild(row);
    }
}

/**
 *
 * @param value {number}
 */
function defineBageClass (value) {
    if (value < 4){
      return 'bg-danger';
    } else if (value < 7) {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
}

window.addEventListener('load', main);