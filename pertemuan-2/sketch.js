function setup() {
  // membuat canvas dengan ukuran 640x480
  createCanvas(640, 480); 
  
  // memberikan background warna darkslategrey
  background(47,79,79); 
}

function draw() {
  // menggambar segitiga di tengah-tengah canvas
  triangle(width/2, height/2-150, width/2-150, height/2+150, width/2+150, height/2+150); 
}
