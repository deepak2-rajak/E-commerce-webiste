let cursor=document.querySelector(".cursor");
let hero=document.querySelector("body");
 
hero.addEventListener("mousemove",function(dets){
     
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    });
});
 let h1=document.querySelector("#hero h1");
 gsap.from("#hero h1",{
opacity:0,
y:-10,
delay:0.4,
duration:0.8,

 })
 gsap.from("#hero h4",{
    opacity:0,
    x:-30,
    delay:0.4,
    duration:0.8,
     })
     
     gsap.from("#hero h2",{
        opacity:0,
        x:30,
        delay:0.4,
        duration:0.8,
         })
 