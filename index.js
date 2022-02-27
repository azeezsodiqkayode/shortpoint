function move() {
    // Read all progress bar with the class myBar
    let elements = document.querySelectorAll(".myBar");  
    // set interval of progress bar movement  
    let id = setInterval(frame, 10);
    function frame(elem) {
     for(elem of elements){
        let width = elem.value
      if (width >= 100) {
        clearInterval(id);
      } else {
        elem.value++; 
      }
    }
   }
  }

  
// function that reset the progress bar back to default 50%
function reset(){
    let elements = document.querySelectorAll(".myBar");   
     for(elem of elements){
        elem.value = 50
      }
}