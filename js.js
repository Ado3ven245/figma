let menu = document.querySelector(".menu");

menu.addEventListener("click",function(event){
   
    let clickTarget = event.target;
    console.log(clickTarget);
    let activeBtn = document.querySelector(".active");
    if(clickTarget.classList.contains(".menu")){
        clickTarget.classList.add("active");
        activeBtn.classList.remove("active")
        
    }
});