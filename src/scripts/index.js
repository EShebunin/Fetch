import initSliders from "./sliders";
import initPopaps from "./popap";
import initLazy from "./lazy";
import showHeader from "./app"

$(document).ready(()=>{
    initSliders();
    initPopaps();
    initLazy();
    showHeader();
});