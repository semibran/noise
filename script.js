"use strict";!function(){var i=window.innerWidth,d=window.innerHeight,a=document.createElement("canvas"),o=a.getContext("2d");a.width=i,a.height=d,document.body.appendChild(a);var n=0,r=new Array(30).fill().map(function(a){for(var t=o.createImageData(i,d),e=t.width*t.height*4,n=0;n<e;n+=4){var r=Math.floor(256*Math.random());t.data[n+0]=r,t.data[n+1]=r,t.data[n+2]=r,t.data[n+3]=255}return t});o.putImageData(r[0],0,0),requestAnimationFrame(function a(){var t=++n%r.length;var e=r[t];o.putImageData(e,0,0);requestAnimationFrame(a)})}();