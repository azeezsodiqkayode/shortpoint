function move() {
    let elements = document.querySelectorAll(".myBar");   
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


function reset(){
    let elements = document.querySelectorAll(".myBar");   
     for(elem of elements){
        elem.value = 50
      }
}