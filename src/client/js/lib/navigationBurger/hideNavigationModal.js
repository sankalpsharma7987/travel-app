const $NAVIGATION_MODAL_ELEMENT = document.querySelector('.navigation-modal');
const $CLOSE_BUTTON_ELEMENT = document.querySelector('#close-btn-navigation');

/*Client-Side Javascript. 
This helper function is called by other javascript functions to hide the navigation modal for small screen resolutions.
The setTimeout function is used to provide a delay before the navigation-modal-display class is removed from the modal element.
This is to ensure the slide-out effect is taking place before the display of the navigation modal is removed. */

const hideNavigationModal = (e)=>{
    
    if(e.target.nodeName!=='A' || e.target.nodeName==='SPAN')
    {
        $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-slide-out');
        $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-slide-in');
        setTimeout(()=>{
            $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-display');
    
        },600)
    }
    
}


$NAVIGATION_MODAL_ELEMENT.addEventListener('click',hideNavigationModal);
$CLOSE_BUTTON_ELEMENT.addEventListener('click',hideNavigationModal);

module.exports = { hideNavigationModal };