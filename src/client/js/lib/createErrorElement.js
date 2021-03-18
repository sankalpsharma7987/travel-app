const createErrorElement = (error)=>{

    const errorDiv = document.createElement('div');
    let text = `<p>${error}</p>`;
    errorDiv.innerHTML = text;

    return errorDiv;

}

module.exports = { createErrorElement };