document.addEventListener("DOMContentLoaded", function() {
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  
    
    function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFA500"; 
      ctx.fill();
      ctx.closePath();
    }
  
    
    canvas.addEventListener("click", function(event) {
      var rect = canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      drawCircle(mouseX, mouseY);
    });
  });