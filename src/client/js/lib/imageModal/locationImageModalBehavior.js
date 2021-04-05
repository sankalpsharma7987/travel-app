const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image');
const $IMAGE_MODAL_ELEMENT = document.querySelector('.image-modal');
const $LOCATION_IMAGE_MODAL_ELEMENT = document.querySelector('.location-image-modal');
const $LOCATION_IMAGE_MODAL_CLOSE_BUTTON_ELEMENT = document.querySelector('#close-btn-image-modal');

const enableLocationImageModal = (e)=>{
     $IMAGE_MODAL_ELEMENT.classList.add('image-modal-display');
     $LOCATION_IMAGE_MODAL_ELEMENT.setAttribute('src',e.target.src);   
}

const disableLocationImageModal = (e)=>{
    $IMAGE_MODAL_ELEMENT.classList.remove('image-modal-display');
    $LOCATION_IMAGE_MODAL_ELEMENT.setAttribute('src',"#");
}

$LOCATION_IMAGE_ELEMENT.addEventListener('click',enableLocationImageModal);

$LOCATION_IMAGE_MODAL_ELEMENT.addEventListener('click',disableLocationImageModal);
$LOCATION_IMAGE_MODAL_CLOSE_BUTTON_ELEMENT.addEventListener('click',disableLocationImageModal);

module.exports = { enableLocationImageModal,disableLocationImageModal };