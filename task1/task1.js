function countVowels() {
    var count = 0;
    var vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    var elem = document.getElementById("content").value;
    elem.toLowerCase();
    for (var i = 0; i <= elem.length; i++) {
        for (var y = 0; y <= vowels.length; y++) {
            if (elem[i] === vowels[y]) {
                count++;
            }
        }
    }
    alert('В вашем имени количество гласных = ' + count);
}
