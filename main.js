var attempt = 0;

function show(){
    if (attempt === 0){
        attempt = 1;
        let spis = document.querySelector(".typeList");
        spis.style.opacity = "1";
        spis.style.display = "flex";
    }

    else if (attempt === 1){
        attempt = 0;
        let spis = document.querySelector(".typeList");
        spis.style.opacity = "0";
        spis.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded',function(event){
    let spis = document.querySelector(".typeList");
    let button = document.querySelector('.menu');
    let nav  = document.querySelector('nav');
    button.addEventListener('click',function(event){
        button.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
