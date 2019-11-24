"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    let controller = new ScrollMagic.Controller();


    /* let escena2 = new ScrollMagic.Scene({
             triggerElement: "#cinque",
         //reverse: false

         })
         
         .setTween("#verd, #groc, #bronze",3, {
             left: "0%",

         })
    .setClassToggle(".aa", "he") //li afegeixes una classe, posem la classe i la nova class//
        .addTo(controller);
        */
        

    $(".imatgmockup").each(function () {
        let escena0 = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 0,
                triggerHook: 0.8,
             reverse: false
            })
            .setTween(this, 2, {
                left: "0%",
               

            })
            .addTo(controller);
    })





    let escena1 = new ScrollMagic.Scene({
            triggerElement: ".colors",
            //reverse: false
        })
        .setTween("#verd", 3, {
            left: "0%",

        })
        
        .addTo(controller);


    let escena5 = new ScrollMagic.Scene({
            triggerElement: ".colors",
            //reverse: false

        })
        .setTween("#groc", 4, {
            left: "0%",
        })
      
        .addTo(controller);

    let escena7 = new ScrollMagic.Scene({
            triggerElement: ".colors",
            //reverse: false

        })

        .setTween("#bronze", 5, {
            left: "0%",

        })
     


        .setClassToggle(".imatgmokup", "he") //li afegeixes una classe, posem la classe i la nova class//
        .addTo(controller);


});





/*window.onload = function () {
	var texto = document.getElementById("verd");
    var texto1 = document.getElementById("groc");
    var texto2 = document.getElementById("bronze");

    let tl = new TimelineLite ();
    
    tl.to(texto, 3,  {
        left: "0%",
        top:"10%",
        backgroundColor: "purple",
        color: "black",
        width: "100%",
        height:"30%",
        fontSize:"20px",
        bottom:"0%",
        display:"block",
    },)
        .to(texto1, 4, {
   left: "0%",
        top:"40%",
        backgroundColor: "blue",
        color: "black",
        width: "100%",
        height:"20%",
        fontSize:"20px",
        bottom:"0%",
        display:"block",
    },"-=3")
        .to(texto2, 4, {
 left: "0%",
        backgroundColor: "green",
        color: "black",
        width: "100%",
        height:"10%",
        fontSize:"20px",
        top: "60%",
        bottom:"0%",
        display:"block",
    },"-=2.5")
}*/
/**/
