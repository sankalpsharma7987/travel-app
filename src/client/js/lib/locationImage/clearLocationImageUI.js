const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image')

const clearLocationImageUI = ()=>{
    $LOCATION_IMAGE_ELEMENT.innerHTML = "";
}

module.exports = { clearLocationImageUI };