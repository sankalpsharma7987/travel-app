const $LOCATION_IMAGE_ELEMENT = document.querySelector('.location-image');

const updateLocationImage = (imageData)=>{

    const fragment = Client.createLocationImageElements(imageData);
    $LOCATION_IMAGE_ELEMENT.appendChild(fragment);
}

export { updateLocationImage };