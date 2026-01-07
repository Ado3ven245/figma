let menu = document.querySelector(".menu");
let mobileBtn = document.querySelector(".mobile-button")

let body = document.querySelector(".body")


menu.addEventListener("click",function(event){
   
    let clickTarget = event.target;
    console.log(clickTarget);
    let activeBtn = document.querySelector(".active");
    if(clickTarget.classList.contains("aa")){
        clickTarget.classList.add("active");
        activeBtn.classList.remove("active")
        let mobileMenu = document.querySelector(".html-hide")  
        if(!mobileMenu.classList.contains('hide')){
            mobileMenu.classList.add('hide');

            console.log('rgrvdv')
        }
    }
    
    if(!body.classList.contains("off-scroll") && !mobileMenu.classList.contains("hide")){
        body.classList.add("off-scroll")
        console.log("96357-394")
    }
    else{
        body.classList.remove("off-scroll")
    }
    
});

let classLink = ".a1" ;

window.onscroll = function(){
   
    let h =document.documentElement.clientHeight;
      console.log(h)                

    if(window.scrollY >= h*4 ){
        classLink = ".a5";
    }
    else if(window.scrollY >= h*3){
        classLink = ".a4";
    }
    else if(window.scrollY >= h*2){
        classLink = ".a3";
    }
    else if(window.scrollY >= h){
        classLink = ".a2";
    }
    else{
        classLink = ".a1 ";
    }
    let liAnimation = document.querySelector(".li");
    let activeBtn = this.document.querySelector(".active");
    let newActiveBtn = document.querySelector(classLink);
    if(!newActiveBtn.classList.contains("active")){
        newActiveBtn.classList.add("active");
        activeBtn.classList.remove("active");
          liAnimation.classList.add("activeh");
       liAnimation.classList.remove("activeh");

      
        
    };
}

// mobileBtn.addEventListener("click", function(event){
// mobileMenu.classList.toggle("hide");




// })




