function initSliderHeader() {
    $(".main__slider").slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        adaptiveHeight:false
    });
};
function initSliderInter() {
    $(".inter__slider").slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true
    });
};
function initSliderCardproduct() {
    $(".cardproduct__slider").slick({
        infinite:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
};
function initSliderDots() {
    $(".dots").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cardproduct__slider',
        focusOnSelect: true,
        variableWidth: true
    });
};
export default function initSliders() {
    initSliderHeader();
    initSliderInter();
    initSliderCardproduct();
    initSliderDots();
}