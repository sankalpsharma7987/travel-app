/*Client-Side Javascript.
This helper function is used to enable and disable the location image modal display.
It also sets the attribute value of the image tag, in the location image modal, based on whether the display of the modal is enabled or disabled
The behavior of the display is based on if the close button in the location image modal or the image itself is clicked.
*/

const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image');
const $IMAGE_MODAL_ELEMENT = document.querySelector('.image-modal');
const $LOCATION_IMAGE_MODAL_ELEMENT = document.querySelector('.location-image-modal');
const $LOCATION_IMAGE_MODAL_CLOSE_BUTTON_ELEMENT = document.querySelector('#close-btn-image-modal');

const enableLocationImageModal = (e)=>{

     $IMAGE_MODAL_ELEMENT.classList.add('image-modal-display');
     $LOCATION_IMAGE_MODAL_ELEMENT.setAttribute('src',e.target.src); 

}

const disableLocationImageModal = ()=>{

    $IMAGE_MODAL_ELEMENT.classList.remove('image-modal-display');
    $LOCATION_IMAGE_MODAL_ELEMENT.setAttribute('src',"#");

}

$LOCATION_IMAGE_ELEMENT.addEventListener('click',enableLocationImageModal);

$LOCATION_IMAGE_MODAL_ELEMENT.addEventListener('click',disableLocationImageModal);
$LOCATION_IMAGE_MODAL_CLOSE_BUTTON_ELEMENT.addEventListener('click',disableLocationImageModal);

module.exports = { enableLocationImageModal,disableLocationImageModal };