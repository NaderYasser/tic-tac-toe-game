var button = [];
for (var i = 1; i < 10; i++)
  {
	   button[i]=document.getElementById("canvas"+i);
  }

var ctx = [];
for(var i = 1 ; i < 10; i++)
  {
	   ctx[i] = button[i].getContext('2d');
  }
var Disabled = [];
for(var i = 1 ; i < 10; i++)
  {
  	    Disabled[i]= false;
  }
var result = false ;
var content = [];

function flip (x) {

	if (!Disabled[x]) {

		Disabled[x]=true ;
		button[x].style.opacity = 0.7 ;
		content[x] = 'x' ;

		button[x].style.transform = "rotateY(180deg)";
		button[x].style.webkitTransform = "rotateY(180deg)";
        button[x].style.mstransform = "rotateY(180deg)";
        button[x].style.moztransform = "rotateY(180deg)";
        button[x].style.otransform = "rotateY(180deg)"; 


        setTimeout(function(){
           
           ctx[x].lineWidth = 4 ;
           ctx[x].beginPath();
           ctx[x].moveTo(15,15);
           ctx[x].lineTo(60,60);
           ctx[x].moveTo(60,15);
           ctx[x].lineTo(15,60);
           ctx[x].stroke();
           ctx[x].closePath(); 

           computerTurn();
	}, 300)
	   
	} 
	setTimeout(checkWinner, 1000);
}
	
function computerTurn()
{
	var r = Math.random();

  if(content[1]=='0' && content[2]=='0' && !Disabled[3])
    draw0Steps(3);
  else if(content[1]=='0' && content[3]=='0' && !Disabled[2])
    draw0Steps(2);
  else if(content[2]=='0' && content[3]=='0' && !Disabled[1])
    draw0Steps(1);
  else if(content[4]=='0' && content[5]=='0' && !Disabled[6])
    draw0Steps(6);
  else if(content[4]=='0' && content[6]=='0' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='0' && content[6]=='0' && !Disabled[4])
    draw0Steps(4);
  else if(content[7]=='0' && content[8]=='0' && !Disabled[9])
    draw0Steps(9);
  else if(content[7]=='0' && content[9]=='0' && !Disabled[8])
    draw0Steps(8);
  else if(content[8]=='0' && content[9]=='0' && !Disabled[7])
    draw0Steps(7);
  else if(content[1]=='0' && content[4]=='0' && !Disabled[7])
    draw0Steps(7);
  else if(content[1]=='0' && content[7]=='0' && !Disabled[4])
    draw0Steps(4);
  else if(content[4]=='0' && content[7]=='0' && !Disabled[1])
    draw0Steps(1);
  else if(content[2]=='0' && content[5]=='0' && !Disabled[8])
    draw0Steps(8);
  else if(content[2]=='0' && content[8]=='0' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='0' && content[8]=='0' && !Disabled[2])
    draw0Steps(2);
  else if(content[3]=='0' && content[6]=='0' && !Disabled[9])
    draw0Steps(9);
  else if(content[3]=='0' && content[9]=='0' && !Disabled[6])
    draw0Steps(6);
  else if(content[6]=='0' && content[9]=='0' && !Disabled[3])
    draw0Steps(3);
  else if(content[1]=='0' && content[5]=='0' && !Disabled[9])
    draw0Steps(9);
  else if(content[1]=='0' && content[9]=='0' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='0' && content[9]=='0' && !Disabled[1])
    draw0Steps(1);
  else if(content[3]=='0' && content[5]=='0' && !Disabled[7])
    draw0Steps(7);
  else if(content[3]=='0' && content[7]=='0' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='0' && content[7]=='0' && !Disabled[3])
    draw0Steps(3);

  else if(content[1]=='x' && content[2]=='x' && !Disabled[3])
    draw0Steps(3);
  else if(content[1]=='x' && content[3]=='x' && !Disabled[2])
    draw0Steps(2);
  else if(content[2]=='x' && content[3]=='x' && !Disabled[1])
    draw0Steps(1);
  else if(content[4]=='x' && content[5]=='x' && !Disabled[6])
    draw0Steps(6);
  else if(content[4]=='x' && content[6]=='x' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='x' && content[6]=='x' && !Disabled[4])
    draw0Steps(4);
  else if(content[7]=='x' && content[8]=='x' && !Disabled[9])
    draw0Steps(9);
  else if(content[7]=='x' && content[9]=='x' && !Disabled[8])
    draw0Steps(8);
  else if(content[8]=='x' && content[9]=='x' && !Disabled[7])
    draw0Steps(7);
  else if(content[1]=='x' && content[4]=='x' && !Disabled[7])
    draw0Steps(7);
  else if(content[1]=='x' && content[7]=='x' && !Disabled[4])
    draw0Steps(4);
  else if(content[4]=='x' && content[7]=='x' && !Disabled[1])
    draw0Steps(1);
  else if(content[2]=='x' && content[5]=='x' && !Disabled[8])
    draw0Steps(8);
  else if(content[2]=='x' && content[8]=='x' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='x' && content[8]=='x' && !Disabled[2])
    draw0Steps(2);
  else if(content[3]=='x' && content[6]=='x' && !Disabled[9])
    draw0Steps(9);
  else if(content[3]=='x' && content[9]=='x' && !Disabled[6])
    draw0Steps(6);
  else if(content[6]=='x' && content[9]=='x' && !Disabled[3])
    draw0Steps(3);
  else if(content[1]=='x' && content[5]=='x' && !Disabled[9])
    draw0Steps(9);
  else if(content[1]=='x' && content[9]=='x' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='x' && content[9]=='x' && !Disabled[1])
    draw0Steps(1);
  else if(content[3]=='x' && content[5]=='x' && !Disabled[7])
    draw0Steps(7);
  else if(content[3]=='x' && content[7]=='x' && !Disabled[5])
    draw0Steps(5);
  else if(content[5]=='x' && content[7]=='x' && !Disabled[3])
    draw0Steps(3);
 
  else if(!Disabled[5]) draw0Steps(5);
  else if(!Disabled[1]) draw0Steps(1);
  else if(!Disabled[3]) draw0Steps(3);
  else if(!Disabled[7]) draw0Steps(7);
  else if(!Disabled[9]) draw0Steps(9);
  else if(r<0.1 && !Disabled[1]) draw0Steps(1);
  else if(r<0.2 && !Disabled[2]) draw0Steps(2);
  else if(r<0.3 && !Disabled[3]) draw0Steps(3);
  else if(r<0.4 && !Disabled[4]) draw0Steps(4);
  else if(r<0.5 && !Disabled[5]) draw0Steps(5);
  else if(r<0.6 && !Disabled[6]) draw0Steps(6);
  else if(r<0.7 && !Disabled[7]) draw0Steps(7);
  else if(r<0.8 && !Disabled[8]) draw0Steps(8);
  else if(r<1   && !Disabled[9]) draw0Steps(9);
  else computerTurn();
}

 function draw0Steps(x)
 {
 	Disabled[x] = true ;
 	button[x].style.opacity = 0.7 ;
 	content[x] = '0';
 	button[x].style.transform = "rotateX(180deg)";
	button[x].style.webkitTransform = "rotateX(180deg)";
    button[x].style.mstransform = "rotateX(180deg)";
    button[x].style.moztransform = "rotateX(180deg)";
    button[x].style.otransform = "rotatex(180deg)"; 


setTimeout(function(){
    ctx[x].beginPath();
    ctx[x].lineWidth = 4 ;
    ctx[x].arc(37,37,25,0,Math.PI*2,false);
    ctx[x].stroke();
    ctx[x].closePath();  

}, 300)
    
 }
 function checkWinner()
 {
 	if(!result)
 	{
 		if      (content[1]=='x'&& content[2]=='x'&& content[3]=='x') {showWinner('You Win');}
 	    else if (content[4]=='x'&& content[5]=='x'&& content[6]=='x') {showWinner('You Win');}
 	    else if (content[7]=='x'&& content[8]=='x'&& content[9]=='x') {showWinner('You Win');}
 	    else if (content[1]=='x'&& content[4]=='x'&& content[7]=='x') {showWinner('You Win');}
        else if (content[2]=='x'&& content[5]=='x'&& content[8]=='x') {showWinner('You Win');}
 	    else if (content[3]=='x'&& content[6]=='x'&& content[9]=='x') {showWinner('You Win');}
 	    else if (content[1]=='x'&& content[5]=='x'&& content[9]=='x') {showWinner('You Win');}
 	    else if (content[3]=='x'&& content[5]=='x'&& content[7]=='x') {showWinner('You Win');}
 	    	
 	    else if (content[1]=='0'&& content[2]=='0'&& content[3]=='0') {showWinner('You Lose');}
 	    else if (content[4]=='0'&& content[5]=='0'&& content[6]=='0') {showWinner('You Lose');}
 	    else if (content[7]=='0'&& content[8]=='0'&& content[9]=='0') {showWinner('You Lose');}
 	    else if (content[1]=='0'&& content[4]=='0'&& content[7]=='0') {showWinner('You Lose');}
        else if (content[2]=='0'&& content[5]=='0'&& content[8]=='0') {showWinner('You Lose');}
 	    else if (content[3]=='0'&& content[6]=='0'&& content[9]=='0') {showWinner('You Lose');}
 	    else if (content[1]=='0'&& content[5]=='0'&& content[9]=='0') {showWinner('You Lose');}
 	    else if (content[3]=='0'&& content[5]=='0'&& content[7]=='0') {showWinner('You Lose');}	
 	    
 	    else if(
        (content[1]=='x' || content[1]=='0') &&
        (content[2]=='x' || content[2]=='0') &&
        (content[3]=='x' || content[3]=='0') &&
        (content[4]=='x' || content[4]=='0') &&
        (content[5]=='x' || content[5]=='0') &&
        (content[6]=='x' || content[6]=='0') &&
        (content[7]=='x' || content[7]=='0') &&
        (content[8]=='x' || content[8]=='0') &&
        (content[9]=='x' || content[9]=='0')) 
        showWinner('Game is a draw. Play again!');
 }}
 function showWinner(x)
 {
 	alert(x);
 	result = true ;
 }