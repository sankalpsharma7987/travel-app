const $NAVIGATION_MODAL_ELEMENT = document.querySelector('.navigation-modal');

const hideNavigationModal = (e)=>{
    console.log(e.target.nodeName);
    if(e.target.nodeName!=='A')
    {
        $NAVIGATION_MODAL_ELEMENT.classList.add('navigation-modal-slide-out');
        $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-slide-in');
        setTimeout(()=>{
            $NAVIGATION_MODAL_ELEMENT.classList.remove('navigation-modal-display');
    
        },600)
    }
}

$NAVIGATION_MODAL_ELEMENT.addEventListener('click',hideNavigationModal);

module.exports = { hideNavigationModal };