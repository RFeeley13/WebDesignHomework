document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  
    // Function to draw a circle at the specified position
    function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFA500"; 
      ctx.fill();
      ctx.closePath();
    }
  
    // Event listener for mouse click on canvas
    canvas.addEventListener("click", function(event) {
      // Get the mouse position relative to the canvas
      var rect = canvas.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
  
      // Draw a circle at the clicked position
      drawCircle(mouseX, mouseY);
    });
  });