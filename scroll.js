const container = document.querySelector('.container');
var score = 0;
var curr_no = 1;

const backgroundColors = [
    '#ffffff', // White
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff', // Cyan
    '#ff7f00', // Orange
    '#7f00ff', // Purple
    '#008080', // Teal
    '#800080', // Purple
    '#008000', // Dark Green
    '#800000', // Maroon
    '#808080', // Gray
  ];
  
  const textColors = [
    '#000000', // Black text on white background
    '#ffffff', // White text on red background
    '#000000', // Black text on green background
    '#ffffff', // White text on blue background
    '#000000', // Black text on yellow background
    '#000000', // Black text on magenta background
    '#000000', // Black text on cyan background
    '#ffffff', // White text on orange background
    '#ffffff', // White text on purple background
    '#ffffff', // White text on teal background
    '#ffffff', // White text on purple background
    '#ffffff', // White text on dark green background
    '#ffffff', // White text on maroon background
    '#000000', // Black text on gray background
  ];
  
  // You can use these arrays to pair background and text colors in your styles or applications
  

function loadPages(){
    const scroll_number =  document.createElement('div');
    scroll_number.innerHTML = `<h1>${curr_no}</h1>`;
    scroll_number.style.backgroundColor = backgroundColors[curr_no % backgroundColors.length];
    scroll_number.style.color = textColors[curr_no % backgroundColors.length];
    curr_no++;
    container.appendChild(scroll_number)
}

loadPages();

 
 // listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll',()=>{
    if(container.getBoundingClientRect().bottom-4 <= window.innerHeight){
        loadPages();
    }
 });