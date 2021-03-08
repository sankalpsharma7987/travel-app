const createLocationImageElements = (imageData)=>{

    const locationImage = document.createElement('div');
    let text = `<img src=${imageData.webformatURL}>`;
    locationImage.innerHTML = text;

    locationImage.classList.add('location')

    const fragment = document.createDocumentFragment();
    fragment.appendChild(locationImage);
    
    return fragment;

}

export { createLocationImageElements };