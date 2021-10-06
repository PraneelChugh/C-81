c=document.getElementById("myCanvas");
ctx=c.getContext("2d");
Color="aqua";
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.LineWidth=5;
ctx.arc(200,200,140,0,2*Math.PI);