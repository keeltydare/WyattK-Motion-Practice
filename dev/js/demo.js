import $ from "jquery";
import {gsap} from "gsap";
//import the plugins
import GSDevTools from "gsap/GSDevTools";

//register plugins
gsap.registerPlugin(GSDevTools);

$(document).ready(function(){



  GSDevTools.create();

  var tl = gsap.timeline({id:"timeline"});
  var redBox = $('.red-box');
  var blueBox = $('.blue-box');
  var orangeBox = $('.orange-box');
  var boxArray = [redBox, blueBox, orangeBox];

  //Wrap Utility
  //var color = gsap.utils.wrap(["green","black", "blue"]);
  //var myX = gsap.utils.wrap([50,100, 150]);
  var myX = gsap.utils.wrap([600,700, 300]);

  console.log('Page loaded');

//gsap.to(boxArray, {duration:3, id:"colorchange", backgroundColor:color, x:myX, stagger:0.5});

tl.set(blueBox, {y:0})
.to(boxArray, {duration:3, x:myX, stagger: 0.5})
  .to(blueBox, {duration:1, rotation: "200deg", borderRadius: "100px"})
  .to(blueBox, {duration:1, scale:2, yoyo:true, repeat:1, ease: "back.out(6)"})
  .to(blueBox, {duration:2, y:2000})
  .fromTo(blueBox, {y:-2000}, {duration:2, y:0})

;







});//ready END
