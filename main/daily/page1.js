const myHeading = document.querySelector('.text');
const DefaultText = myHeading.textContent;
document.querySelector('#tested').onclick = function(){
    myHeading.textContent = 'Hello, world!';
};
document.querySelector('#no').onclick = function(){
    myHeading.textContent = 'You have to test, so please check javascript.net';
};
document.querySelector('#reset').onclick = function(){
    myHeading.textContent = DefaultText;
};

const countdisplay = document.querySelector('.count');
var count = 0;
function data(updown) {
    if(!updown){
        count--;
    } else {
        count++;
    }
    if(((count % 100) === 0) && (count !== 0)){
        return 'good';
    } else {
        return count;
    };
}
document.getElementById('dataINC').onclick = function(){
    countdisplay.textContent = 'count:' + data(true);
};
document.getElementById('dataDEC').onclick = function(){
    countdisplay.textContent = 'count:' + data(false);
};