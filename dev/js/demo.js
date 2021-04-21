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
  var color = gsap.utils.wrap(["green","black", "blue"]);
  var myX = gsap.utils.wrap([50,100, 150]);

  console.log('Page loaded');

gsap.to(boxArray, {duration:1, id:"colorchange", backgroundColor:color, x:myX, stagger:0.5});







});//ready END
