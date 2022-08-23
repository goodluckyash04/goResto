let nav= document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")        
    }
}

let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current =start,
        range=end-start,
        increament=end>start ? 1 : -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increament;
            obj.textContent = current+"+";
            if(current == end){
                clearInterval(timer);
            } 
        },step)
    }
    counter("count1",0,1287,30000);
    counter("count2",100,578,50000);
    counter("count3",0,1440,30000);
    counter("count4",0,1100,3000);
})

function copy(x){
    var copyText =x.textContent;
    navigator.clipboard.writeText(copyText);   /* Copy the text inside the text field */
    alert(copyText + " Number Copied to clipboard!!!");
    /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
}