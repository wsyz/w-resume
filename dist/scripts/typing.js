!function(t,n){"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define("Typing",[],function(i){return t.Typing=n(i)}):t.Typing=n()}(this,function(){function t(t){this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},this._stop=!0,"function"!=typeof this.opts.done&&(this.opts.done=function(){})}return t.fn=t.prototype={toArray:function(t){for(var n=[],i=0;i<t.length;i++)n.push(t[i]);return n},init:function(){this.chain.val=this.convert(this.source,this.chain.val)},convert:function(t,n){for(var i=this,e=this.toArray(t.childNodes),o=0;o<e.length;o++){var s=e[o];if(3===s.nodeType)n=n.concat(s.nodeValue.split(""));else if(1===s.nodeType){var r=[];r=i.convert(s,r),n.push({dom:s,val:r})}}return n},print:function(t,n,i){setTimeout(function(){t.appendChild(document.createTextNode(n)),i()},this.delay)},play:function(t){if(!this._stop&&t){if(!t.val.length)return void(t.parent?this.play(t.parent):this.opts.done());var n=t.val.shift(),i=this;if("string"==typeof n)this.print(t.dom,n,function(){i.play(t)});else{for(var e=document.createElement(n.dom.nodeName),o=i.toArray(n.dom.attributes),s=0;s<o.length;s++){var r=o[s];e.setAttribute(r.name,r.value)}t.dom.appendChild(e),n.parent=t,n.dom=e,this.play(n.val.length?n:n.parent)}}},start:function(){this._stop=!1,this.init(),this.play(this.chain)},pause:function(){this._stop=!0},resume:function(){this._stop=!1,this.play(this.chain)}},t.version="2.1",t});