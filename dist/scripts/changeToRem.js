!function(n,e){function t(){var e=n.innerWidth>750?750:n.innerWidth,t=0!==a?Math.min(e/r,n.innerHeight/a):e/r;return parseInt(1e4*t*l)/1e4}var i,o,d,c,u=0,r=e.designWidth,a=e.designHeight||0,l=e.designFontSize||100,s=e.callback||null,g=document.documentElement;document.body;!function(){if(i=g.getBoundingClientRect().width,c=c?c:arguments.callee,i!==n.innerWidth&&u<20)n.setTimeout(function(){u++,c()},0);else if(o=t(),o+"px"!==getComputedStyle(g)["font-size"])return g.style.fontSize=o+"px",s&&s(o)}(),n.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){clearTimeout(d),d=setTimeout(function(){c()},200)},!1)}(window,{designWidth:750,designFontSize:100,callback:function(n){console.timeEnd("test")}});