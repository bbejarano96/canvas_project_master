const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = `rgb(255, 201, 92)`;
ctx.fillRect(50, 50, 600, 400);
ctx.clearRect(395, 120, 150, 250);
ctx.strokeRect(350, 120, 250, 250);



function draw() {
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  }
else {
    const para = document.querySelector(".unsupported");
    para.textContent = `Your browser does not support HTML5 Canvas.`;
  }
}
draw();
