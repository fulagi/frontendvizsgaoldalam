const hamburger = document.querySelector('.hamburger');
const mobileMenu =document.querySelector('.navmenu');
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle("active")
       mobileMenu.classList.toggle("active")
       line1.classList.toggle("active")
       line2.classList.toggle("active")
       line3.classList.toggle("active")
  
})

function magnify(cikesz, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(cikesz);

  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

    img.parentElement.insertBefore(glass, img);

glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2; 

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    
    e.preventDefault();

     pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
   
    
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
   
    
    glass.style.backgroundPosition = "-" 
    + ((x * zoom) - w + bw) + "px -" 
    + ((y * zoom) - h + bw) + "px";
  }

    function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e;
   
    
    a = img.getBoundingClientRect();

     x = e.pageX - a.left;
    y = e.pageY - a.top;
    
    x = x - window.scrollX;
    y = y - window.scrollY;
    return {x : x, y : y};
  }
}

    magnify("cikesz", 7);
