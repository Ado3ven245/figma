let menu = document.querySelector(".menu");
let mobileBtn = document.querySelector(".burger")
let mobileButtons = document.querySelectorAll(".mobile-btn")
let body = document.querySelector(".body")
let mobile = document.querySelector(".html-hide")
menu.addEventListener("click",function(event){
   
    let clickTarget = event.target;
    // console.log(clickTarget);
    let activeBtn = document.querySelector(".active");
    if(clickTarget.classList.contains("aa")){
        clickTarget.classList.add("active");
        activeBtn.classList.remove("active")
       
    }
   
    
    
});

let classLink = ".a1" ;

window.onscroll = function(){
   
    let h =document.documentElement.clientHeight;
    //   console.log(h)                

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
    let activeBtn = document.querySelector(".active");
    let newActiveBtn = document.querySelector(classLink);
    if(!newActiveBtn.classList.contains("active")){
        newActiveBtn.classList.add("active");
        activeBtn.classList.remove("active");
        liAnimation.classList.add("activeh");
       liAnimation.classList.remove("activeh");

      
        
    };
}

mobileBtn.addEventListener("click", function(event){
// mobileMenu.classList.toggle("hide");
   
        if(!mobile.classList.contains('hide')){
            mobile.classList.add('hide');

            
        }
        else{mobile.classList.remove("hide")}
        
        let mobileMenu = document.querySelector(".html-hide")
        

        if(!body.classList.contains("off-scroll") && !mobileMenu.classList.contains("hide")){
            body.classList.add("off-scroll")
            
        }
        else{
            body.classList.remove("off-scroll")
        }

})

const links = document.querySelectorAll('.menu-link');


mobileButtons.forEach(mobileButton => {
    mobileButton.addEventListener('click', () => {
       
        document.body.classList.remove('off-scroll');
        mobile.classList.add('hide');
        
    });
});

