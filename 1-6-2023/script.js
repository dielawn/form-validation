// //create a webpage with a variable grid 16x16 to 64x64 grid of square divs
// let grid;
// function generateDivs(grid){
// const screen = document.getElementsByClassName('sketchFrame')
// for(let i = 0; i < grid; i++){
//     let row = document.createElement('div');
//     row.className = 'row';
//     for(let x = 1; x <= grid; x++){
//         let cell = document.createElement('div');
//         cell.className = 'gridsquare';
//         cell.innerText = '1';
//         row.appendChild(cell);
//     }
//     screen.appendChild(row);
// }
// }

let slider = document.getElementById('gridSizeSlider')
let num = Number(slider.value)
console.log(num)
slider.addEventListener('click', function(){   
    clearGrid()      
    num = Number(slider.value)
    createGrid(num)
    console.log(num)
})




function createGrid(rows){
let columns = rows;
let screen = document.getElementById('sketchFrame')
for (let i = 0; i < columns; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
      let row = document.createElement('div');
      row.className = 'row';
      row.addEventListener('mouseenter', function() {
        row.style.backgroundColor = 'grey';
      });
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
  
}

let cel = document.getElementsByClassName('row')
for(let i = 0; i < cel.length; i++){
    cel[i].addEventListener('mouseenter', function(){
    let currentElement = cel[i];
    currentElement.style.backgroundColor = 'grey';
})
}

function clearGrid(){
    let columns = document.getElementsByClassName('column');
    while (columns.length > 0) {
      let elementToRemove = columns[0];
      let parentElement = elementToRemove.parentNode;
      parentElement.removeChild(elementToRemove);
    }
    num = Number(slider.value)
    createGrid(num)
  }
  
  createGrid(num)

function shake(){

}
