var swiper = null;



function resizeScrenn() {
    if (document.body.clientWidth > 768) {
        if(swiper != null){
            swiper.destroy(true , true);
        }
    }else{
        swiper = new Swiper('.block__list', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.block__pagination',
                clickable: true,
            }
        });
    }
}
resizeScrenn();

/*
window.addEventListener('resize', function(event){
    resizeScrenn();
});*/


document.querySelector('#show-block').addEventListener('click', function (evt) {
    evt.preventDefault();
    if(document.querySelector('.block__list').classList.contains('block__list--hidden')){
        document.querySelector('.block__list').classList.remove('block__list--hidden');
        document.querySelector('.block__view-text-2').classList.remove('block__view-text--hidden');
        document.querySelector('.block__view-text-1').classList.add('block__view-text--hidden');
        document.querySelector('.next__svg').classList.add('block__view--rotate');
    }else{
        document.querySelector('.block__list').classList.add('block__list--hidden');
        document.querySelector('.block__view-text-2').classList.add('block__view-text--hidden');
        document.querySelector('.block__view-text-1').classList.remove('block__view-text--hidden');
        document.querySelector('.next__svg').classList.remove('block__view--rotate');
    }
});