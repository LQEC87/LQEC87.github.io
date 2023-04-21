document.addEventListener('keydown', keydown_ivent);
document.addEventListener('keyup', keyup_ivent);

function keydown_ivent(e) {
    /*if (e.key === 'a' || e.key === 'A') {
        //Aキーが押された時の処理
        document.getElementById('A').classList.add('keyPress');
        return false
    }*/
    var str = new String(e.key);
    console.log(e.key);
    console.log(str.toUpperCase());
    document.getElementById(str.toUpperCase()).classList.add('keyPress');
    return false;
}
function keyup_ivent(e) {
    let elements = document.querySelectorAll('.key')
    elements.forEach(function (element) { element.classList.remove('keyPress') });
}