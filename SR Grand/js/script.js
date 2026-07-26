/* =====================================
        GRAND SR HOTEL
====================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "#0B3D91";
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.background = "rgba(11,61,145,.92)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "none";

    }

});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

const revealElements = document.querySelectorAll(
".about,.stats,.why-us,.rooms,.amenities,.gallery-section,.director-section,.contact-section"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealElements.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active-link");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active-link");

}

});

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},700);

},1200);

});
const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=Math.ceil(target/speed);

if(current<target){

counter.innerText=current+increment;

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

}

update();

});
function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}