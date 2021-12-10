//Открытие меню бургера
function onClickMenu(){
    document.getElementById('bm').classList.toggle('active');
    document.getElementById('hm').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
};

//Затемнение шапки
window.onscroll = function (){
    if(window.pageYOffset >= 100){
        document.getElementById('header').classList.add('scroll');
    }
    else if (window.pageYOffset < 100) {
        document.getElementById('header').classList.remove('scroll');
    }
}

//Закрытие меню при переходе по ссылке
function onClickLink(){
    document.getElementById('bm').classList.remove('active');
    document.getElementById('hm').classList.remove('active');
    document.getElementById('body').classList.remove('lock');
};