/*Client-Side Javascript.
This helper function is used to create an image tag and assign the src attribute the url of the image to fetch.
The division tag, containing the image tag is then returned as a fragment to the calling function.
*/

const createLocationImageElements = (imageData)=>{

    const locationImage = document.createElement('img');
    locationImage.setAttribute('src',imageData.webformatURL);

    const fragment = document.createDocumentFragment();
    fragment.appendChild(locationImage);
    
    return fragment;

}

export { createLocationImageElements };