const container = document.querySelector('.container');
const grayButton = document.createElement('button');
const blackButton = document.createElement('button');
const rgbButton = document.createElement('button');
const resetButton = document.createElement('button');
const btnContainer = document.querySelector('.buttons');

function makeGrid(col, rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div'); 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('cell')
    }
  };

makeGrid(16, 16)



 function grayColor() { 
    const boxes = container.querySelectorAll('.cell');
    grayButton.textContent = 'Gray';
    grayButton.addEventListener('click', () => {
            boxes.forEach(box => box.addEventListener('mouseover', ()=> {
                let randNum = Math.floor(Math.random() * 256);
                let grayCol = `rgb(${randNum},${randNum},${randNum})`
                box.style.background = grayCol;              
            }))
        })
     
         btnContainer.appendChild(grayButton).classList.add('btn');
}
grayColor();



function blackColor() { 
    const boxes = container.querySelectorAll('.cell');
    blackButton.textContent = 'Black';
    blackButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            let blackCol = `black`;
            box.style.background = blackCol;
        }))
    })
    btnContainer.appendChild(blackButton).classList.add('btn');
}
blackColor()



function randomRgb() { 
    const boxes = container.querySelectorAll('.cell');
    rgbButton.textContent = 'RAINBOW!';
    rgbButton.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    btnContainer.appendChild(rgbButton).classList.add('btn');
  
}
randomRgb();



function resetSize() {
    const boxes = container.querySelectorAll('.cell');
    boxes.forEach(box => box.remove());
} 

function reSize() {
    resetButton.textContent = 'Reset the grid';
    resetButton.addEventListener('click', () => {
        let userInput = prompt('enter the size');
        if(userInput === null || userInput < 1) {
            resetSize();
            makeGrid(16,16);
            blackColor();
            randomRgb();
            grayColor();
        } else {
            resetSize();
            makeGrid(userInput, userInput);
            blackColor();
            randomRgb();
            grayColor();
        }
    })
    btnContainer.appendChild(resetButton).classList.add('btn');
}
reSize();