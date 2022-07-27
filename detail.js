const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
let data;

async function main () {
    const locationData = window.location.href.split('=');
    const id = locationData[locationData.length - 1];
    data = await getData(id);
    setDataToPage(data);
}

async function getData(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=99621527e8941a7599142285b313f7bf&region=RU&language=ru-RU`;
    const data = await fetch(url).then(res => res.json());
    return data;
}

function getGenre(genres) {
    return genres ? genres.map(el => el.name).join(', ') : '';
}

function setDataToPage(data) {
    leftSide.innerHTML = `
        <div class="position-sticky" style="top: 6rem;">
            <div class="card mb-3">
                <img src="https://image.tmdb.org/t/p/w1280${data?.backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data?.title}</h5>
                    <p class="card-text">Жанр: ${getGenre(data?.genres)}</p>
                    <p class="card-text"><small class="text-muted">${data?.release_date}</small></p>
                </div>
            </div>
        </div>
    `;
    rightSide.innerHTML = `
        <h2 class="pb-2 fs-1"><strong>${data?.title}</strong></h2>
        <div class="pt-2 border-bottom pb-4  mb-4">
            <span class="badge ${defineBageClass(data?.vote_average)} fs-5 p-1">${data?.vote_average}</span>
        </div>
    
        <article class="blog-post">
            <h2 class="blog-post-title">О фильме</h2>
    
            <table class="table">
                <tbody>
                <tr>
                    <td>${data?.original_title}</td>
                    <td>${data?.overview}</td>
                </tr>
                <tr>
                    <td>Страна</td>
                    <td>${data?.production_countries[0]?.name || ''}</td>
                </tr>
                <tr>
                    <td>Дата релиза</td>
                    <td>${data?.release_date}</td>
                </tr>
                </tbody>
            </table>
        </article>
    `;
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