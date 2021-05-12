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

function update()
{
   c.clearRect(0,0,897,720); // clear canvas
   //draw stones
   var carpisma_tespiti = false;
   for(var i = 0; i<stone.length;i++){
      c.drawImage(stoneDown,stone[i].x , stone[i].y);
      stone[i].x-=3;
      if(stone[i].x<95) // carpisma tespiti
      {
         if(this.cycYp == stone[i].y)
         {
            alert("oyun bitti");
            carpisma_tespiti = true;
            location.reload();
         }
      }
      if(stone[i].x<0)
      {
         random_line = Math.floor(Math.random() * 2);     // returns a random integer from 0 1
         stone[i].y = lines[random_line];
         stone[i].x = canvas.width;
      }
   }
   //draw bycycle
   c.drawImage(cyclist,cycXp,cycYp);
   if(carpisma_tespiti == false)
   {
      requestAnimationFrame(update); // carpisma yoksa update fonksiyonunu tekrar cagiriyoruz
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
 
}
update(); //animasyonu baslatiyoruz
