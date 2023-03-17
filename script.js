let studio = document.querySelectorAll(".studio");
let projects = document.querySelectorAll(".projects");
let architecture = document.querySelectorAll(".architecture");
let blog = document.querySelectorAll(".blog");

let body = document.querySelector("body");
let sectionFirst = document.querySelector(".first");
let sectionSecond = document.querySelector(".second");
let sectionThird = document.querySelector(".third");
let sectionFourth = document.querySelector(".fourth");
let sectionFifth = document.querySelector(".fifth");
let sectionSixth = document.querySelector(".sixth");
let adaptivSlayder = document.querySelector(".adaptivSlayder");
let path2 = document.querySelector("#path");
let sections = document.querySelectorAll('.section');
let card = document.querySelector("#card");
let header = document.querySelectorAll(".header");
let headerButton = document.querySelector(".header-button");
let form = document.querySelector(".form");
let linksHeader = document.querySelectorAll(".links");
let formBackground = document.querySelector(".form-background");
let point = false;
let page = 'studio';


Onload(sectionFirst, sectionThird, adaptivSlayder);
Page(page);
function Onload (firstSection, secondSection, ThirdSection){
    for(i of sections){
        i.style.display = 'none';
    }
    firstSection.style.display = 'flex';
    if(secondSection !== undefined){
        secondSection.style.display = 'flex';
    }
    if(ThirdSection !== undefined){
        ThirdSection.style.display = 'flex';
    }
    path2.style.display = 'block';
}
function Page(x){
    for(i of linksHeader){
        if (i.classList.contains(x)){
            i.style.borderBottom = '2px solid rgba(255, 201, 120, 1)';
            i.style.color = 'rgba(255, 201, 120, 1)';
        }else{
            i.style.borderBottom = '0';
            i.style.color = 'rgba(171, 174, 183, 1)';
        }
    }
}
for(i of studio){
    i.addEventListener('click', function (){
        Onload(sectionFirst, sectionThird, adaptivSlayder);
        page = 'studio';
        Page(page);
    })
}
for(i of projects){
    i.addEventListener('click', function (){
    Onload(sectionFourth);
    sectionFourth.style.marginTop = '0';
    page = 'projects';
    Page(page);
})
}
for(i of architecture){
    i.addEventListener('click', function (){
        Onload(sectionSecond, sectionFifth);
        sectionFifth.style.marginTop = '100px';
        sectionSecond.style.marginTop = '200px';
        sectionSixth.style.display = 'none';
        page = 'architecture';
        Page(page);
    })
}
for(i of blog){
    i.addEventListener('click', function (){
        Onload(sectionSixth);
        sectionSixth.style.marginTop = '0';
        path2.style.display = 'none';
        page = 'blog';
        Page(page);
    })
}
card.addEventListener('mouseout', function (){
    card.style.opacity = '0.6';
})
card.addEventListener('mouseover', function (){
    card.style.opacity = '1';
})
headerButton.addEventListener('click', function (){
    if(!point){
        form.style.display = 'flex';
        formBackground.style.display = 'flex';
        body.overflow = 'hidden';
        point = true;
    }else{
        form.style.display = 'none';
        formBackground.style.display = 'none';
        point = false;
        body.overflow = 'auto';
    }
})








