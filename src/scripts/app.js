export default function showHeader(){
    const HEADER = document.querySelector(".header")
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 40) {
            HEADER.classList.add('header--fixed');
        } else {
            HEADER.classList.remove('header--fixed');
        }    
    });
}