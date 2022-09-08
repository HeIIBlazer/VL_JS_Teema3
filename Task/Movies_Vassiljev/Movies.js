var MoviesInfo = [
    {
        Name: 'The Godfather',
        Director: 'Francis Ford Coppola',
        Description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
        Poster: 'The_Godfather.jpg',
        Year: '1972',
        Actors:['Marlon Brando ','Al Pacino ','James Caan']
    },

    {
        Name: 'The Dark Knight',
        Director: 'Christopher Nolan',
        Description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        Poster: 'The_Dark_Knight.jpg',
        Year: '2008',
        Actors:['Christian Bale ','Heath Ledger ','Aaron Eckhart']
    },

    {
        Name: 'Pulp Fiction',
        Director: 'Quentin Tarantino',
        Description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        Poster: 'Pulp_Fiction.jpg',
        Year: '1994',
        Actors:['John Travolta ','Uma Thurman ','Samuel L. Jackson']
    },
    
    {
        Name: 'The Intouchables',
        Director: ['Olivier Nakache ','Éric Toledano'],
        Description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        Poster: 'The_Intouchables.jpg',
        Year: '2011',
        Actors:['François Cluzet ','Omar Sy ','Anne Le Ny ']
    },

    {
        Name: 'Constantine',
        Director: 'Francis Lawrence',
        Description: 'Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister death was not a suicide, but something more.',
        Poster: 'Constantine.jpg',
        Year: '2005',
        Actors: ['Keanu Reeves ','Rachel Weisz ','Shia LaBeouf']
    },
];

//функция обработки и вывода
function printMovies(MoviesInfo){
    var container = document.createElement('div');
    container.classList.add('MoviesBlock');
    //соберем текст и добавим в conteiner
    var text = '';
    text += '<div class="MoviesName"><h3>'+ MoviesInfo.Name + '</h3></div>';
    // фото
    if('Poster' in MoviesInfo){ //фото есть
        text += '<div><img src="Posters/'+ MoviesInfo.Poster +'"></div class="MoviesPoster">';

    }//end if

    text += '<div class="MoviesText"><p><b>Director</b>:  '+ MoviesInfo.Director +' </p>';
    text += '<p><b>Description</b>: '+ MoviesInfo.Description +'</p>';
    text += '<p style="font-size:23px"><b>Actors</b>:'+MoviesInfo.Actors+'</p>';

    text += '<p><b>Year of creation</b>: '+ MoviesInfo.Year +'</p></div>';

    //добавим текст и присоединим в content
    container.innerHTML=text;
    document.getElementById("content").appendChild(container);

}

for(var i=0; i<MoviesInfo.length; i++){
    //вызвать функцию и передать по одному элементу
    printMovies(MoviesInfo[i]);
}//end for
