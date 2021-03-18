const createLocationImageElements = (imageData)=>{

    const locationImage = document.createElement('img');
    // let text = `<img src=${imageData.webformatURL}>`;
    locationImage.setAttribute('src',imageData.webformatURL);
    // locationImage.innerHTML = text;

    // locationImage.classList.add('location')

    const fragment = document.createDocumentFragment();
    fragment.appendChild(locationImage);
    
    return fragment;

}

export { createLocationImageElements };