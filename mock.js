/**
 * Variable for saving data of movies
 * @type {{
 *      page: number,
 *      total_pages: number,
 *      total_results: number,
 *      results: {
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
 *          vote_count: number}[]
 *      }}
 */
const data = {
    page: 1,
    results: [
        {
            adult: false,
            backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
            genre_ids: [28, 12, 878],
            id: 634649,
            original_language: "en",
            original_title: "Spider-Man: No Way Home",
            overview: "Действие фильма «Человек-паук: Нет пути домой» начинает своё развитие в тот момент, когда Мистерио удаётся выяснить истинную личность Человека-паука. С этого момента жизнь Питера Паркера становится невыносимой. Если ранее он мог успешно переключаться между своими амплуа, то сейчас это сделать невозможно. Переворачивается с ног на голову не только жизнь Человека-пауку, но и репутация. Понимая, что так жить невозможно, главный герой фильма «Человек-паук: Нет пути домой» принимает решение обратиться за помощью к своему давнему знакомому Стивену Стрэнджу. Питер Паркер надеется, что с помощью магии он сможет восстановить его анонимность. Стрэндж соглашается помочь.",
            popularity: 15932.56,
            poster_path: "/zpH4yEqOJOReykVcSQYA1A258SQ.jpg",
            release_date: "2021-12-15",
            title: "Человек-паук: Нет пути домой",
            video: false,
            vote_average: 8.4,
            vote_count: 7103,
        },
        {
            adult: false,
            backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
            genre_ids: [28, 12, 14, 878],
            id: 524434,
            original_language: "en",
            original_title: "Eternals",
            overview: "Много тысячелетий на зад с планеты Олимпия на Землю была отправлена группа сверхлюдей, обладающих суперспособностями, — Вечные. С доисторических времён они защищали человечество от нападений ужасных чудовищ девиантов, но любое другое вмешательство в развитие цивилизации им было запрещено. Начало XXI века. Уже несколько столетий прошло с тех пор, как был уничтожен последний девиант, когда после странного землетрясения внезапно объявляется новый монстр. Теперь живущим в разных уголках планеты Вечным снова придётся сплотить силы, чтобы противостоять новой угрозе.",
            popularity: 5080.551,
            poster_path: "/iCQTxIgEpNYvPfHvEuZkDcmWItU.jpg",
            release_date: "2021-11-08",
            title: "Вечные",
            video: false,
            vote_average: 7.2,
            vote_count: 4015,
        },
        {
            adult: false,
            backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
            genre_ids: [16, 35, 10751, 14],
            id: 568124,
            original_language: "en",
            original_title: "Encanto",
            overview: "Удивительная семья Мадригалов живет в спрятанном в горах Колумбии волшебном доме, расположенном в чудесном и очаровательном уголке под названием Энканто. Каждого ребёнка в семье Мадригалов магия этого места благословила уникальным даром — от суперсилы до способности исцелять. Увы, магия обошла стороной одну лишь юную Мирабель. Обнаружив, что магия Энканто находится в опасности, Мирабель решает, что именно она может быть последней надеждой на спасение своей особенной семьи.",
            popularity: 4631.299,
            poster_path: "/yAw00ke7CzSLe4mMuCGkAzma69K.jpg",
            release_date: "2021-11-25",
            title: "Энканто",
            video: false,
            vote_average: 7.8,
            vote_count: 3933,
        }
    ],
    total_pages: 923,
    total_results: 18446,
};

/**
 * Variable for saving genres of movies
 * @type {{name: string, id: number}[]}
 */
const genres = [
    {id: 28, name: 'боевик'},
    {id: 12, name: 'приключения'},
    {id: 16, name: 'мультфильм'},
    {id: 35, name: 'комедия'},
    {id: 80, name: 'криминал'},
    {id: 99, name: 'документальный'},
    {id: 18, name: 'драма'},
    {id: 10751, name: 'семейный'},
    {id: 14, name: 'фэнтези'},
    {id: 36, name: 'история'},
    {id: 27, name: 'ужасы'},
    {id: 10402, name: 'музыка'},
    {id: 9648, name: 'детектив'},
    {id: 10749, name: 'мелодрама'},
    {id: 878, name: 'фантастика'},
    {id: 10770, name: 'телевизионный фильм'},
    {id: 53, name: 'триллер'},
    {id: 10752, name: 'военный'},
    {id: 37, name: 'вестерн'},
];