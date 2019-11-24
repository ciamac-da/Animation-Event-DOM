var x = document.getElementById("myDIV"); 
function myAnimation(){
      this.style.animation  = "mymove 2s 2 ";
      this.innerHTML= "click again!";

}
x.addEventListener("click", myAnimation);

x.addEventListener("animationstart", function(event){
   this.style.backgroundColor = "blue";   
   this.innerHTML = event.animationName;
} );
x.addEventListener("animationiteration", function(event){
  this.style.backgroundColor = "yellow";
  this.innerHTML = event.elapsedTime;
} );
x.addEventListener("animationend",  function(event ) {
  this.style.backgroundColor = "red";
});


