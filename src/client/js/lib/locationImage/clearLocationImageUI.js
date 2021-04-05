/*Client-Side Javascript. 
This helper function is used to clear any image element from the location image section in the location detail section.
*/

const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image')

const clearLocationImageUI = ()=>{
    $LOCATION_IMAGE_ELEMENT.innerHTML = "";
}

module.exports = { clearLocationImageUI };