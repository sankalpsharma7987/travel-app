const createWeatherDetailElements = (data)=>{

    const fragment = document.createDocumentFragment();

    const detailDiv = document.createElement('div');
    let text = data;
    detailDiv.innerText = data;

    fragment.appendChild(detailDiv);
    return fragment;

}

export { createWeatherDetailElements };