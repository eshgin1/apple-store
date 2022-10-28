
const smallImgWithBlueBorder = document.querySelectorAll('.modal__image_small'), // блок с синей границей
      smallImg = document.querySelectorAll('.modal__img_small'),
      bigImg = document.querySelectorAll('.modal__img_big'),
      card = document.querySelectorAll('.popular__card'),
      modal = document.querySelectorAll('.modal'),
      closeBtn = document.querySelectorAll('.modal__arrow-wrap'),
      burger = document.querySelector('.burger'),
      burgerLine = document.querySelectorAll('.burger__line')
      menu = document.querySelector('.header__wrapper'),
      inputSearch = document.querySelector('.header__form-search');


// slider

for(let i=0; i<smallImgWithBlueBorder.length; i++){
    smallImgWithBlueBorder[i].addEventListener('click', (event) => {
        for(let i=0; i< smallImg.length; i++){
            smallImgWithBlueBorder[i].classList.remove('modal__image_small_active')
            if(event.target === smallImg[i]){
                smallImgWithBlueBorder[i].classList.add('modal__image_small_active')                
            }
            for(let i=0; i < bigImg.length; i++){
                bigImg[i].classList.remove('modal__img_big_active');
                if(event.target === smallImg[i]){
                    bigImg[i].classList.add('modal__img_big_active');
                }
            }
        }
    })
}

// open modal
      
for (let i = 0; i < modal.length; i++){

    card[i].addEventListener('click', () => {
        modal[i].style.display = 'flex';
    })

    window.addEventListener('click', (event) => {
        if(event.target.classList.value === 'modal__arrow-wrap' || event.target.classList.value === 'modal__arrow' || event.target.classList.value === 'modal'){
            console.log('+')
            modal[i].style.display = 'none';
        }
    })
}

// burger

window.addEventListener('click', (event) => {
    burgerLine.forEach(e => {
        if(event.target === burger || event.target === e){
            menu.classList.toggle('header__wrapper_active')
        }
    })
})

// search

window.addEventListener('keyup', (event) => {
    const inputSearch = document.querySelector('.header__form-search'), // input
          filter = inputSearch.value.toUpperCase(),// буквы которые вводим 
          list = document.querySelector('.products__wrapper'), // достали блок с элементами
          listItems = list.querySelectorAll('.products__items'); // достали все 'карточки' с товарами

    let a, // сюда поместим все дивы с названиями товара 
        textValue; // сюда поместим только названия текста с HTML
    
        if(event.target === inputSearch){
        for(let i = 0; i < listItems.length; i++){
            a = listItems[i].querySelectorAll('.products__items-title')[0];// достали все дивы с названиями
            textValue = a.textContent || a.innerText; // названия с дивов поместили в переменную
            if(textValue.toUpperCase().indexOf(filter) > -1 && textValue.toUpperCase().indexOf(filter) == 0){// если в слове есть нужная буква и ее индекс больше -1
                listItems[i].style.display = 'block';
            }else{
                listItems[i].style.display = 'none';
            }
        }
    }
})