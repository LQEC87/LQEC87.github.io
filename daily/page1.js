const myHeading = document.querySelector('.text');
const DefaultText = myHeading.textContent;
const countdisplay = document.querySelector('.count');
var count = 0;
function data(updown) {
    if(!updown){
        count--;
    } else {
        count++;
    };
    if(((count % 100) === 0) && (count !== 0)){
        return 'good';
    } else {
        return count;
    };
};

document.querySelector('#tested').onclick = function(){
    myHeading.textContent = 'Hello, world!';
};
document.querySelector('#no').onclick = function(){
    myHeading.textContent = 'You have to test, so please check javascript.com';
};

document.querySelector('#reset').onclick = function(){
    myHeading.textContent = DefaultText;
    count = 0;
    countdisplay.textContent = 'count:0';
};

document.getElementById('dataINC').onclick = function(){
    countdisplay.textContent = 'count:' + data(true);
};
document.getElementById('dataDEC').onclick = function(){
    countdisplay.textContent = 'count:' + data(false);
};

var primeCheck = true;
const inputbox = document.getElementById('inputbox');
const textbox = document.querySelector('.textbox');
document.getElementById('enter').onclick = function(){
    var number = 2;
    do{
        number = Abs(Math.trunc(inputbox.value));
    }while(number == 1);
    for(let i = 2;i<number;i++){
        if(number % i === 0){
            primeCheck = false;
            textbox.textContent = 'NONprimeNumber.';
            break;
        }
    }
    if(primeCheck){
        textbox.textContent = toString(number) + ' is PrimeNumber.';
    }
};

document.querySelector('.backto').onclick = function(){
    location.href = 'https://lqec87.github.io/main/main'
}
