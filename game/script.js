var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var cyclist =new Image();
cyclist.src = "cyclist1.png";
var cycXp = 20;
var cycYp = 636;

var stoneDown = new Image();
stoneDown.src = "stone.png";


var stone = [];
stone[0] = {
   x : canvas.width,
   y : 560
}
var lines = [];
lines[0] = 560;
lines[1] = 636;

var score = 0;

function update()
{
   c.clearRect(0,0,897,720); 

   var carpisma_tespiti = false;
   for(var i = 0; i<stone.length;i++){
      c.drawImage(stoneDown,stone[i].x , stone[i].y);
      stone[i].x-=3;
      if(stone[i].x<95) 
      {
         if(this.cycYp == stone[i].y)
         {
            alert("Oyun bitti skor: "+score);
            carpisma_tespiti = true;
            location.reload();
         }
      }
      if(stone[i].x<0)
      {
         random_line = Math.floor(Math.random() * 2);     
         stone[i].y = lines[random_line];
         stone[i].x = canvas.width;

         score++;
      }
   }
   //draw bycycle
   c.drawImage(cyclist,cycXp,cycYp);
   if(carpisma_tespiti == false)
   {
      requestAnimationFrame(update); 
   }
   
}

window.onkeydown = function(Hareket){
   
 if((Hareket.keyCode == 38) || (Hareket.keyCode == 87)) {
       this.cycYp = 560;
 }

  
 else if((Hareket.keyCode == 40) || (Hareket.keyCode == 83)){
        this.cycYp = 636;
  
 }
 else{
    alert("Yanlış tuşa basıldı!!");
 }
 
}
update(); 
