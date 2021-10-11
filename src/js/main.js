import pureSlider from "./assets/slider"
import profileView from "./assets/profileView"
import popup from "./assets/popup";

document.addEventListener('DOMContentLoaded', () => {
    pureSlider('.slider__slides', 'dots', 'classic', false, false, false, 5000);
    profileView();
    popup();
})