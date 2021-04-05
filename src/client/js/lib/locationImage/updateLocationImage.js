/*Client-Side Javascript.
This helper function clears the location image section and creates new image element, based on the data received and renders it in the locatio image section
*/

const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image');

const updateLocationImage = (imageData)=>{

    Client.clearLocationImageUI();
    const fragment = Client.createLocationImageElements(imageData);
    $LOCATION_IMAGE_ELEMENT.appendChild(fragment);
    
}

export { updateLocationImage };