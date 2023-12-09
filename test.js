var cactus = 0;
var tree = 0;
var flower = 0;
var succulent = 0;
var eatable = 0;
var flag = true;
var startbut;
var pic;
var text;
var b1; 
var b2;
var quenum = 1;

document.addEventListener('DOMContentLoaded', function(){
    startbut = document.querySelector('.starting');
    b1 = document.querySelector('.var1');
    b2 = document.querySelector('.var2');
    pic = document.querySelector('.img4test');
    text = document.querySelector('.que4test');
    b1.onclick = function(){
        flag = true;
        quenum += 1;
        nextQue();
    };
    b2.onclick = function(){
        flag = false;
        quenum += 1;
        nextQue();
    };
});

function nextQue(){
    if (quenum === 2){
        q2();
    }
    else if (quenum === 3){
        q3();
    } 
    else if (quenum === 4){
        q4();
    }
    else if (quenum === 5){
        q5();
    }
    else if (quenum === 6){
        finish();
    }
}


function start(){
    startbut.style.opacity = "0";
    b1.textContent = "польза";
    b2.textContent = "красота";
    b1.style.opacity = "1";
    b2.style.opacity = "1";
    text.textContent = "Вопрос 1. Вы хотите, чтобы растение приносило пользу или вам важна красота?"
}

function q2(){
    if (flag === true){
        tree += 1;
        eatable += 1;
    }
    else{
        flower += 1;
        succulent += 1;
        cactus += 1;
    }
    b1.textContent = "да";
    b2.textContent = "нет";
    pic.src = "test_2.jpeg";
    text.textContent = "Вопрос 2. Должно ли растение быть большим?"
}

function q3(){
    if (flag === true){
        tree += 1;
        succulent += 1;
        cactus += 1;
    }
    else{
        flower += 1;
        eatable += 1;  
    }
    b1.textContent = "да";
    b2.textContent = "нет";
    pic.src = "test_3.webp";
    text.textContent = "Вопрос 3. Вы хотите удивить гостей?"
}

function q4(){
    if (flag === true){
        flower += 1;
        succulent += 1;
    }
    else{
        eatable += 1;
        tree += 1;
        cactus += 1;
    }
    b1.textContent = "есть";
    b2.textContent = "нет";
    pic.src = "test_4.jpg";
    text.textContent = "Вопрос 4. Есть ли в вашем доме дети/животные?"
}

function q5(){
    if (flag === true){
        cactus += 1;
        succulent += 1;
    }
    else{
        flower += 1;
        tree += 1;
        eatable += 1;
    }
    b1.textContent = "да";
    b2.textContent = "нет";
    pic.src = "test_5.png";
    text.textContent = "Вопрос 5. Вы часто уезжаете из дома?"
}

function finish(){
    b1.style.opacity = "0";
    b2.style.opacity = "0";
    let k = Math.max(succulent, eatable, cactus, flower, tree);
    if (k === succulent){
        pic.src = "fin_suc.jpg";
        text.textContent = "Вам подходят суккуленты - разнообразные и лёгкие в уходе!"
    }
    else if (k === eatable){
        pic.src = "fin_eat.jpeg";
        text.textContent = "Рекомендуем развести маленький огород на подоконнике. Рассада - ваш выбоор!"
    }
    else if (k === cactus){
        pic.src = "fin_cac.jpg";
        text.textContent = "Колючие, но такие милые! Неприхотливые кактусы идеально подходят для Вас!"
    }
    else if (k === flower){
        pic.src = "fin_flo.jpg";
        text.textContent = "Классика - не обязательно скучно. Вырастите самый красивый цветок!"
    }
    else if (k === tree){
        pic.src = "fin_tree.jpeg";
        text.textContent = "Эффектные пальмы, бонсаи и фикусы привнесут свежесть в интерьер Вашего дома!"
    }
}