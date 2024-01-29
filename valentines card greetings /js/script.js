// Rikshit Devgan 100801784
// invitation Card

window.onload = function() {
    document.getElementById('obj').style.display = 'none';
    document.getElementById('btns').addEventListener('click', evt => {
        initScene();
        evt.target.style.display= 'none';
    })

   
}
function initScene(){
    document.getElementById('obj').style.display = 'block';
     // refrence the content of the object
     const theSVG = document.getElementById('obj').contentDocument;
     // refrence all the svg elemets
     let theStars = theSVG.getElementById('stars');
     let theHeart = theSVG.getElementById('heart');
     let theText = theSVG.getElementById('text-figure');
     let theHighlight = theSVG.getElementById('underline');
     let theFigure = theSVG.getElementById('figure');
     let theSurface = theSVG.getElementById('moon-surface');
     let theValentine = theSVG.getElementById('valentine-text');
     let theSides = theSVG.getElementById('side-hearts');
     let theBanner = theSVG.getElementById('banner');
     let theBannerText= theSVG.getElementById('banner-text');
     let theStroke = theSVG.getElementById('pen-stroke');
     let theOutlines = theSVG.getElementById('outlines');
     let theRoute = theSVG.getElementById('route')
 
     let tl = gsap.timeline({paused:true});
     let atl = gsap.timeline();
     let figureTL = gsap.timeline({paused:true});
     figureTL.from(theText, {
         opacity:0,
         duration: 2
     })
 
 
     theFigure.addEventListener('click',() =>{
         figureTL.restart();
 
     })
     gsap.from(theSurface,{
         opacity:0,
         delay: 2
     })
         
     gsap.set(theStars, { transformOrigin: 'center center' });
     gsap.from(theStars, { 
         duration: 3, 
         delay:3,
        ease: "wiggle", 
        scale :.7,
        opacity:0,
     repeat: -1, 
     yoyo: true
  });
 
     gsap.set(theHeart, { transformOrigin: 'center center' });
     gsap.from(theHeart, { duration: 3, 
         ease: "bounce.out", scale :0,
      repeat: -1, 
      delay:4
      });
      gsap.from(theRoute,{
         opacity:0,
         delay:5
      })
      gsap.from(theBanner,{
         opacity:0,
         delay:6
      })
      
     gsap.from(theHighlight,{
         duration:2,
         ease:"power2",
         opacity:0,
         delay: 5,
     })
 
 
 
 // right side
 gsap.set(theSides, {transformOrigin: 'center center'});
     gsap.from(theSides,{
         duration:4,
         scale:0,
         delay:4,
         repeat:-1,
         yoyo: true,
         ease:"wiggle"
     })
     gsap.from(theValentine,{
         opacity:0,
         delay:6,
     })
     gsap.from(theStroke,{
         duration:5,
         ease:"bounce.out",
         opacity:0,
         delay:5
     })
     gsap.from(theOutlines,{
         duration:.9,
         repeat:-1,
         ease:"bounce.out",
         opacity:0,
         delay:5
     })
 
}