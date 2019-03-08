function countLetters() {

    var str = document.getElementById('string').value;
    var choice = document.getElementsByName('result');
    var exit;

    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked == true) {
            exit = choice[i].value;
        }
    }

    function count(arr) {
        var count = 0;
        for (var b = 0; b <= str.length - 1; b++) {
            for (var y = 0; y <= arr.length - 1; y++) {
                if (str[b] == arr[y]) {
                    count++;
                }
            }
        }

        if (exit == 'console') {
            console.log(count);
        }
        else if (exit == 'alert') {
            alert('Количество букв = ' + count);
        }
        else {
            document.getElementById('demo').innerHTML = 'Количество букв = ' + count;
        }
    }
    count(['a','b','c']);
}