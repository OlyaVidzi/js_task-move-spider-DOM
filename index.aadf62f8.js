var t=document.querySelector(".wall"),e=document.querySelector("img.spider");t.addEventListener("click",function(i){if(i.target===t){var c=i.offsetY,n=i.offsetX,l=t.clientWidth-e.clientWidth,a=t.clientHeight-e.clientHeight,h=Math.max(0,Math.min(n-e.clientWidth/2,l)),o=Math.max(0,Math.min(c-e.clientHeight/2,a));e.style.top="".concat(o,"px"),e.style.left="".concat(h,"px")}});
//# sourceMappingURL=index.aadf62f8.js.map
