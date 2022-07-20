function shadeImage(x) {
    const image = x.querySelector('#portrait')
    image.style.opacity = '25%';
    // addText.class = 'overlay'
    // addText.style.width = '200px';
    // addText.style.float = 'right';
    // // addText.style.position = 'absolute';
    // // addText.style.bottom = '100px';
    // // addText.style.right = '100px';
    // addText.style.transform = 'translate(-50%, -50%)';
}

function normalImage(x) {
    const image = x.querySelector('#portrait')
    image.style.opacity = '100%';
}