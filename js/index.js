// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-top__nav');
let menuLinks = menu.querySelectorAll('.header-top__link')

burger.addEventListener('click' ,

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-top__nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function (el){
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header-top__nav--active');

    document.body.classList.remove('stop-scroll');

  })
});


// search

const loop = document.querySelector('.header-top__loop');
const search = document.querySelector('.header-top__search');
const close = document.querySelector('.close-btn')

loop.addEventListener('click', function () {
  search.classList.add('header-top__search--active');
  loop.classList.add('header-top__loop--hide');
})

close.addEventListener('click', function () {
  search.classList.remove('header-top__search--active');
  loop.classList.remove('header-top__loop--hide');
})



// header-dropdown

const list = document.querySelectorAll('.header-bottom__item');

const reset = (element) => {
  list.forEach(item => {
    const buttonItem = item.querySelector('.header-bottom__btn');
    if (element !== item) {
      item.querySelector('.bottom-item__list').classList.remove('open');
      buttonItem.classList.remove('open');
    }
  });
}

list.forEach(item => {
  item.addEventListener('click',(event) => {
    reset(item)
    item.querySelector('.bottom-item__list').classList.toggle('open');
    const buttonItem = item.querySelector('.header-bottom__btn');
    buttonItem.classList.toggle('open');
  })

});
document.addEventListener('click', function(e) {
  list.forEach(item => {
    const activeList = item.querySelector('.bottom-item__list');
    const buttonItem = item.querySelector('.header-bottom__btn');
    if (!item.contains(e.target) && !buttonItem.contains(e.target) && activeList)  {
      buttonItem.classList.remove('open');
      activeList.classList.remove('open');
    }
  });
});


// hero swiper

const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2200,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  loop:true,
})

// gallery

const element = document.querySelector('.gallery-left__select');
const choices = new Choices(element,{
  allowHTML: false,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: '',
});

new Swiper('.gallery-right__swiper', {
  spaceBetween: 37,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.gallery-navigation__next',
    prevEl: '.gallery-navigation__prev',
  },
  pagination: {
    el: '.gallery-navigation__pagination',
    type: 'fraction',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 29,
    },
    1440: {
      spaceBetween: 37,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.gallery-navigation__next',
        prevEl: '.gallery-navigation__prev',
      },
      pagination: {
        el: '.gallery-navigation__pagination',
        type: 'fraction',
      },
    },
    loop: false,
  },
})

// catalog


new Accordion('.accordion' , {
  openOnInit: [0]
});


let tabsBtn = document.querySelectorAll('.ac-panel__item-btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element){
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn){btn.classList.remove('ac-panel__item-btn--active')});
    e.currentTarget.classList.add('ac-panel__item-btn--active');


    tabsItem.forEach(function (element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// events

new Swiper('.events__swiper', {
  spaceBetween: 50,
  slidesPerView:3,
  slidesPerGroup:3,
  navigation: {
    el: '.events__navigation',
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView:1,
      slidesPerGroup:1,
      pagination: {
        el: '.events__swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    768 : {
      spaceBetween: 35,
      slidesPerView:2,
      slidesPerGroup:2,
      pagination: {
        el: '.events__swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    },
    1015 : {
      spaceBetween: 27,
      slidesPerView:3,
      slidesPerGroup:3,
      pagination: {
        el: '.events__swiper-pagination',
        type: 'bullets',
        clickable: true,
      }

    },
    1440 : {
      spaceBetween: 50,
      slidesPerView:3,
      slidesPerGroup:3,
      navigation: {
        el: '.events__navigation',
        nextEl: '.events__swiper-button-next',
        prevEl: '.events__swiper-button-prev',
      }
    }

  }
})


// tippy


tippy('[data-tippy-content]' , {
  duration: 0,
  arrow: true,
  delay: [1000, 200],
  trigger: 'click',
  hideOnClick: 'toggle',

});




// project

const tooltip = document.querySelectorAll('.project__tooltip');
tooltip.forEach(item => {
  item.addEventListener('click',(event) => {
    item.classList.toggle('tooltip__window--active');
  })

})

new Swiper ('.partners__swiper', {
  spaceBetween: 50,
  slidesPerView:3,
  slidesPerGroup:3,
  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView:1,
      slidesPerGroup:1,
    },

    768 : {
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:23,
    },

    1015: {
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:30,
    },
    1440: {
      spaceBetween: 50,
      slidesPerView:3,
      slidesPerGroup:3,
      navigation: {
        nextEl: '.partners__swiper-button-next',
        prevEl: '.partners__swiper-button-prev',
      },
    }
  },
})


// form

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate('.form');
validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage : 'Недопустимый формат!'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage : 'Недопустимый формат!'
    },
    {
      rule: 'required',
      value: true,
      errorMessage : 'Вы не ввели имя'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ]);
validation.onSuccess(function () {
  document.getElementById('form').submit();
});


// map
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [55.758468, 37.601088],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-target.png',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    }),

    myPlacemarkWithContent = new ymaps.Placemark([55.758468, 37.601088], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'Просто кружочек',
      iconContent: '12'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
})






