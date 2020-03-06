export default function chandgeHeader(){
    const $header = $('header');
    const $slider = $('.main__slider');
        
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide)
    {
      const theme = slick.$slides.eq(nextSlide).attr('data-theme');
      $header.attr('data-theme', theme);
    });
}