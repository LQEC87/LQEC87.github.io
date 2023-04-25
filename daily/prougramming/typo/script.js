//キー入力表示

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
    if (document.getElementById(str.toUpperCase()) != null) { document.getElementById(str.toUpperCase()).classList.add('keyPress'); }
    return false;
}
function keyup_ivent(e) {
    let elements = document.querySelectorAll('.key')
    elements.forEach(function (element) { element.classList.remove('keyPress') });
}

//単語集
const words = ["word", "text", "sound", "speak", "language"];

//単語表示

function print_word(w) {
    document.querySelector('.wordy').innerHTML = '';
    var htmls = '';
    var num = 0;
    for (var char of w) {
        htmls = htmls + '<div class="text ' + char + ' char-' + num + '">' + char + '</div>';
        num = num + 1;
    }
    document.querySelector('.wordy').innerHTML = htmls;
}

var w_n = 0;
print_word(words[w_n]);

//入力検出

document.addEventListener('keypress', key_ditector);
var p_key = '';
var p_num = 0;
var pressed_time = 0;
function key_ditector(e) {
    pressed_time = pressed_time + 1;
    //完全一致系
    /*p_key = p_key + e.key;
    if (p_key.length > words[w_n].length) {
        p_key = p_key.slice(1);
    }
    if (p_key == words[w_n]) {
        w_n = (w_n + 1) % words.length;
        print_word(words[w_n]);
        console.log(p_key);
        p_key = '';
    }*/
    //順番一致系
    if (e.key == words[w_n].charAt(p_num)) {
        if (p_num === words[w_n].length - 1) {
            if (document.querySelectorAll('.colored') != null) {
                let elements1 = document.querySelectorAll('.colored');
                elements1.forEach(function (element1) { element1.classList.remove('colored') })
            }
            p_num = 0;
            w_n = (w_n + 1) % words.length;
            print_word(words[w_n]);
            return;
        }
        document.querySelector('.char-' + p_num).classList.add('colored');
        p_num = p_num + 1;
    }
}

var time = 1;
setInterval(() => {
    time = time + 1;
    document.querySelector('.TPS').innerHTML = "TPS:" + (Math.round(pressed_time / time * 100) / 100).toString();
}, 1000)