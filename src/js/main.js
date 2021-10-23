import pureSlider from "./assets/slider"
import profileView from "./assets/profileView"
import popup from "./assets/popup";
import mobileMenu from "./assets/mobileMenu";

document.addEventListener('DOMContentLoaded', () => {
    pureSlider('.slider__slides', 'dots', 'classic', false, false, false, 5000);
    pureSlider('.companies__wrapper', 'multiple', 'classic');
  
    profileView();
    popup();
    mobileMenu();
})