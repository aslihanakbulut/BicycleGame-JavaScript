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
var yPstn = 95;
var xPstn = 200;
function update()
{
   
   c.clearRect(0,0,897,720); 
   var carpisma_tespiti = false;
   var score; 

   for(var i = 0; i<stone.length;i++){
      c.drawImage(stoneDown,stone[i].x , stone[i].y);
      stone[i].x-=3;

      if(stone[i].x<95) 
      {
         if(this.cycYp == stone[i].y)
         {
            alert("Oyun bitti");
            carpisma_tespiti = true;
            location.reload();
         }
      }
      if(stone[i].x<0)
      {
         random_line = Math.floor(Math.random() * 2);     
         stone[i].y = lines[random_line];
         stone[i].x = canvas.width;
      }
   }
   
   c.drawImage(cyclist,cycXp,cycYp);
   if(carpisma_tespiti == false)
   {
      score++;
      requestAnimationFrame(update); 
   }
   
}

window.onkeydown = function(Hareket){
   // yukari ok ya da w
      if((Hareket.keyCode == 38) || (Hareket.keyCode == 87)) {
            this.cycYp = 560;
      }

      //asagi ok ya da s   
      else if((Hareket.keyCode == 40) || (Hareket.keyCode == 83)){
            this.cycYp = 636;
      
      }
      else{
         alert("Yanlış tuşa basıldı!!!");
      }
      
}

update(); 
