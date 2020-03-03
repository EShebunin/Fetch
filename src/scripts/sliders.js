function initSliderHeader() {
    $(".main__slider").slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
    });
}
export default function initSliders() {
    initSliderHeader();
}