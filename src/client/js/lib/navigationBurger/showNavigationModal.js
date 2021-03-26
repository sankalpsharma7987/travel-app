const $NAVIGATION_BURGER_ELEMENT = document.querySelector('.navigation-burger-items');
const $NAVIGATION_MODAL_ELEMENT = document.querySelector('.navigation-modal');

const showNavigationModal = ()=>{
    $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-slide-out');
    $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-display');
    $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-slide-in');
}

$NAVIGATION_BURGER_ELEMENT.addEventListener('click',showNavigationModal);
module.exports = { showNavigationModal };