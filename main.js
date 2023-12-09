var attempt = 0;

function show(){
    if (attempt === 0){
        attempt = 1;
        let spis = document.querySelector(".typeList");
        spis.style.opacity = "1";
    }

    else if (attempt === 1){
        attempt = 0;
        let spis = document.querySelector(".typeList");
        spis.style.opacity = "0";
    }
}

