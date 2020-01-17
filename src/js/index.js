import '../scss/style.scss';



var swiper1 = null;
var swiper2 = null;
var swiper3 = null;

function resizeScrenn(swiper, element, elementPagin) {
    if (document.body.clientWidth > 768) {
        if(swiper != null){
            swiper.destroy(true , true);
        }
    }else{
        swiper = new Swiper(element, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: elementPagin,
                clickable: true,
            }
        });
    }
}

resizeScrenn(swiper1, '.brends__list', '.brends__pagination');
resizeScrenn(swiper2, '.types__list', '.types__pagination');
resizeScrenn(swiper3, '.prise__list', '.prise__pagination');

/*
window.addEventListener('resize', function(event){
    resizeScrenn();
});*/





document.querySelector('#show-brends').addEventListener('click', function (evt) {
    evt.preventDefault();
    if(document.querySelector('.brends__list').classList.contains('brends__list--hidden')){
        document.querySelector('.brends__list').classList.remove('brends__list--hidden');
        document.querySelector('.brends__view-text-2').classList.remove('brends__view-text--hidden');
        document.querySelector('.brends__view-text-1').classList.add('brends__view-text--hidden');
        document.querySelector('.brends__view .next__svg').classList.add('brends__view--rotate');
    }else{
        document.querySelector('.brends__list').classList.add('brends__list--hidden');
        document.querySelector('.brends__view-text-2').classList.add('brends__view-text--hidden');
        document.querySelector('.brends__view-text-1').classList.remove('brends__view-text--hidden');
        document.querySelector('.brends__view .next__svg').classList.remove('brends__view--rotate');
    }
});



document.querySelector('#show-types').addEventListener('click', function (evt) {
    evt.preventDefault();
    if(document.querySelector('.types__list').classList.contains('types__list--hidden')){
        document.querySelector('.types__list').classList.remove('types__list--hidden');
        document.querySelector('.types__view-text-2').classList.remove('types__view-text--hidden');
        document.querySelector('.types__view-text-1').classList.add('types__view-text--hidden');
        document.querySelector('.types__view .next__svg').classList.add('types__view--rotate');
    }else{
        document.querySelector('.types__list').classList.add('types__list--hidden');
        document.querySelector('.types__view-text-2').classList.add('types__view-text--hidden');
        document.querySelector('.types__view-text-1').classList.remove('types__view-text--hidden');
        document.querySelector('.types__view .next__svg').classList.remove('types__view--rotate');
    }
});




document.querySelector('#show-menu-static').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.menu-static__fon').classList.add('menu-static__fon--show');
    document.querySelector('.menu-static').classList.add('menu-static--show');
});

document.querySelector('#hidden-menu-static').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.menu-static__fon').classList.remove('menu-static__fon--show');
    document.querySelector('.menu-static').classList.remove('menu-static--show');
});





document.querySelector('#message-show').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.modals').classList.add('modals--show');
    document.querySelector('#modals-messege').classList.add('modals__content--show');
});

document.querySelector('#tel-show').addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.modals').classList.add('modals--show');
    document.querySelector('#modals-tel').classList.add('modals__content--show');
});



var modals = document.querySelectorAll('.modals__button-close');
for (var i = 0; i < modals.length; ++i) {
    modals[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        document.querySelector('.modals').classList.remove('modals--show');
        var buttons = document.querySelectorAll('.modals__content');
        for (var j = 0; j < buttons.length; ++j) {
            buttons[j].classList.remove('modals__content--show');
        }
    });
}

