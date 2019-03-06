function getProfile() {
    var person = {};
    var lastName = document.getElementById('lastname').value;
    var firstName = document.getElementById('firstname').value;
    var secondName = document.getElementById('secondname').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementsByName('gender');


    if (lastName == "" || firstName == "" || secondName == "" || age == "") {
        alert("Все поля должны быть заполнены");
    }
    else {
        person['Имя'] = firstName;
        person['Отчество'] = secondName;
        person['Фамилия'] = lastName;
        person['Возраст'] = age;
    }
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            person['Пол'] = gender[i].value;
        }
    }

    if (lastName != "" || firstName != "" || secondName != "" || age != "") {
        document.getElementById('demo').innerHTML = 'Фамилия: ' + person['Фамилия'] + '. Имя: ' + person['Имя'] +
            '. Отчество: '+  person['Отчество'] + '. Возраст: ' + person['Возраст'] + '. Пол: ' + person['Пол'];
    }

}