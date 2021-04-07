const $NAVIGATION_BURGER_ELEMENTS = document.querySelectorAll('.navigation-burger-items');
const $NAVIGATION_MODAL_ELEMENT = document.querySelector('.navigation-modal');
const $HEADER_SECTION = document.querySelector('.header-section');
const $NAVIGATION_SECTION = document.querySelector('#navigation-section');

/*Client-Side Javascript. 
This helper function is called by other javascript functions to show the navigation modal for small screen resolutions.
*/

const showNavigationModal = ()=>{

    $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-slide-out');
    $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-display');
    $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-slide-in');

    if(window.scrollY>50)
    {
        $HEADER_SECTION.classList.add('navigation-mobile-background');
    }

    // $NAVIGATION_SECTION.classList.add('navigation-mobile-background')
    $NAVIGATION_SECTION.setAttribute('style',"background: #55c8da")

}

$NAVIGATION_BURGER_ELEMENTS.forEach($BURGER_ELEMENT=> $BURGER_ELEMENT.addEventListener('click',showNavigationModal));
module.exports = { showNavigationModal };