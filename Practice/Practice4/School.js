/*Задание: создать массив список студентов:
имя, группа, возраст, адрес -город
вывести на страницу school.html - написать функцию печати

Дополнительно:
добавить фото - не для всех студентов!
*/
 
var students =[
    {
        name:"Maksim Dzjubenko",
        group:"JPTVR19",
        age:17,
        aadress:"Johvi",
        photo:  "3.jpg",
    },
    {
        name:"Daniil Divissenko",
        group:"JPTV22",
        age:32,
        aadress:"Tammiku",
        photo:  "2.jpg"
    },
    {
        name:"Aleksandr Koren",
        group:"JPTVR20",
        age:45,
        aadress:"Haapsalu",
    },
    {
        name:"Daniil Vassiljev",
        group:"JPTV20",
        age:18,
        aadress:"K-J",
        photo:  "1.jpg"
    }
];

//--------------- обработка
//функция мечати - вывод одной записи
function printStudent(student){
    var container = document.createElement('div');
    container.style.float='left';
    container.style.width='300px';

    //соберем текст и добавим в conteiner
    var text = '';
    text += '<h3>'+ student.name + '</h3>';
    // фото
    if('photo' in student){ //фото есть
        text += '<img src="Images/'+ student.photo +'">';

    }//end if

    text += '<p>Группа: '+ student.group +'</p>';
    text += '<p>Возраст: '+ student.age +'</p>';

    text += '<p><b>Адрес(город)</b>: '+ student.aadress +'</p>';

    //добавим текст и присоединим в content
    container.innerHTML=text;
    document.getElementById("content").appendChild(container);

}//end function

//вызов функции - перебор массива for
//students.length - кол-во элементов массива count(students)

for(var i=0; i<students.length; i++){
    //вызвать функцию и передать по одному элементу
    printStudent(students[i]);
}//end for
