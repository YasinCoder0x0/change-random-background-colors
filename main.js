/* ---------- By Yasin Coder ---------- */

// Get body and button elements
const body = document.body;
let changeColorBtn = document.querySelector(".change-color");

// Generate random background colors per click
changeColorBtn.addEventListener("click", () => {
  const randomBgColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    
    body.style.backgroundColor = bgColor;
    
    console.log(bgColor);
  };
  
  randomBgColor();
});

//   Move the button toward top and left by subtracting 3px on each side
changeColorBtn.addEventListener('click', () => {
  
  changeColorBtn.style.marginLeft = "-3px";
  changeColorBtn.style.marginTop = "-3px";
  changeColorBtn.style.boxShadow = "4px 5px 0px 0px #000";
  
  setTimeout(function() {
    changeColorBtn.style.marginLeft = "0px";
    changeColorBtn.style.marginTop = "0px";
    changeColorBtn.style.boxShadow = "none";
  }, 300);
})