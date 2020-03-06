export default function showHeader(){
    const   HEADER = document.querySelector(".header");
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 40) {
            // let THEME = HEADER.getAttribute('data-theme');
            HEADER.setAttribute('data-theme', "fixed");
        } else {
            HEADER.setAttribute('data-theme', "white");
        }    
    });
}