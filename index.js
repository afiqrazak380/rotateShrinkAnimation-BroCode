
// Rotate and Shrink Animation

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
  // ===Rotate Diagonally===
  // let timerID = 0;
  // let degrees = 0;
  // let x = 0;
  // let y =0;

  // timerID = setInterval(frame, 5); // callback 'frame' with 5 milisec interval

  
  // function frame(){
  //   if(y >= 200 || x >=200){
  //     clearInterval(timerID) // interval end
  //   }
  //   else{
  //     x+=1;
  //     y+=1;
  //     degrees+=5;
  //     myAnimation.style.left = x + "px";
  //     myAnimation.style.top = y + "px";
  //     myAnimation.style.transform = "rotateZ("+degrees+"deg)";
  //   } 
  // }
  
  // ===Shrink Enlarge===
  let timerID = 0;
  let scaleX = 1;
  let scaleY = 1;


  timerID = setInterval(frame, 5); // callback 'frame' with 5 milisec interval

  function frame(){
    if(scaleX <= 0.01 || scaleY <= 0.01){
      clearInterval(timerID) // interval end
    }
    else{
      scaleX-=0.01; // reduce scaleX by 0.01 relative to initial
      scaleY-=0.01; // reduce scaleY by 0.01 relative to initial
      myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
    }
  }
}
