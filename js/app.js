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
