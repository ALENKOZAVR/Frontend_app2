//Открытие меню бургера
function onClickMenu(){
    document.getElementById('bm').classList.toggle('active');
    document.getElementById('hm').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
};

//Затемнение шапки
window.onscroll = function (){
const header = document.getElementById('header')
  if(window.pageYOffset >= 100){
    header.classList.add('scroll');
  }
  else if (window.pageYOffset < 100) {
    header.classList.remove('scroll');
  }
}

//Закрытие меню при переходе по ссылке
function onClickLink(){
    document.getElementById('bm').classList.remove('active');
    document.getElementById('hm').classList.remove('active');
    document.getElementById('body').classList.remove('lock');
};

//Больше туров
document.addEventListener('DOMContentLoaded', init)

function init() {
  // получаем DOM Element
  const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')
  if(buttonToggleItems.length === 0) {
    throw new Error('Кнопка не найдена в document');
  }
  
  const listItemsContainer = document.getElementsByClassName('tours__items')
  
  // обработчик события клика
  buttonToggleItems[0].addEventListener(
    'click',
    (event) =>
      handleToggleItemsButtonClick(listItemsContainer[0], event)
  )
}

function handleToggleItemsButtonClick(listItemsContainer, pointerEvent) {
  const classForVisibleHiddenItems = 'tours--all-hidden-visible'
  
  if(pointerEvent.currentTarget.innerText === 'Больше туров') {
    pointerEvent.currentTarget.innerText = 'Скрыть'
    listItemsContainer.classList.add(classForVisibleHiddenItems)
  } else {
      pointerEvent.currentTarget.innerText = 'Больше туров'
      listItemsContainer.classList.remove(classForVisibleHiddenItems)
  }
}