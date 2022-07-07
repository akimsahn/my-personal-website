function shadeImage(x) {
    x.style.opacity = '25%';
    const section = document.getElementById('image');
    const addText = document.createElement('div');
    addText.id = 'removeLater'
    addText.textContent = "Allison at Zion Canyon";
    addText.style.position = 'absolute';
    addText.style.top = '50%';
    addText.style.left = '75%';
    addText.style.transform = 'translate(-50%, -50%)';
    section.append(addText)
}


function normalImage(x) {
    x.style.opacity = '100%';
    const removeText = document.getElementById('removeLater');
    removeText.remove();
}