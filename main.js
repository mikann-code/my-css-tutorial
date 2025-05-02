'use strict'
{
const circle  = document.getElementById('circle');
const upBtn  = document.getElementById('upBtn');
const downBtn  = document.getElementById('downBtn');

let rotateValue = circle.style.transform; //rotate(0deg)を示す

function onclickUp() {
  // 時計回りに90度回転する
  let rotateSum = rotateValue + "rotate(-90deg)" ;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum ;
}
function onclickDown() {
  // 半時計回りに90度回転する
  let rotateSum = rotateValue + "rotate(90deg)" ;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum ;
}


upBtn.addEventListener('click',()=>{
  onclickUp();
});


downBtn.addEventListener('click',()=>{
  onclickDown();
});












}