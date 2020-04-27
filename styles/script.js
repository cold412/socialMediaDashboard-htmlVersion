const bodybody = document.querySelector("body");
const lightB = document.getElementById("Clight");
const lightB2 = document.getElementById("Clight2");
const lightB3 = document.getElementById("Clight3");
const lightB4 = document.getElementById("Clight4");
const lightS1 = document.getElementById("Slight1");
const lightS2 = document.getElementById("Slight2");
const lightS3 = document.getElementById("Slight3");
const lightS4 = document.getElementById("Slight4");
const lightS5 = document.getElementById("Slight5");
const lightS6 = document.getElementById("Slight6");
const lightS7 = document.getElementById("Slight7");
const lightS8 = document.getElementById("Slight8");
const test = document.getElementById("check");
const c1 = document.querySelector('#fontB1');
const c2 = document.querySelector('#fontB2');

test.addEventListener("click", function() {
    bodybody.classList.toggle("LightBack");
    lightB.classList.toggle("LightCont");
    lightB2.classList.toggle("LightCont");
    lightB3.classList.toggle("LightCont");
    lightB4.classList.toggle("LightCont");
    lightS1.classList.toggle("LightCont");
    lightS2.classList.toggle("LightCont");
    lightS3.classList.toggle("LightCont");
    lightS4.classList.toggle("LightCont");
    lightS5.classList.toggle("LightCont");
    lightS6.classList.toggle("LightCont");
    lightS7.classList.toggle("LightCont");
    lightS8.classList.toggle("LightCont");
    c1.classList.toggle("FontDark");
    c2.classList.toggle("FontDark");
    lightB.classList.toggle("FontDark");
    lightB2.classList.toggle("FontDark");
    lightB3.classList.toggle("FontDark");
    lightB4.classList.toggle("FontDark");
    lightS1.classList.toggle("FontDark");
    lightS2.classList.toggle("FontDark");
    lightS3.classList.toggle("FontDark");
    lightS4.classList.toggle("FontDark");
    lightS5.classList.toggle("FontDark");
    lightS6.classList.toggle("FontDark");
    lightS7.classList.toggle("FontDark");
    lightS8.classList.toggle("FontDark");
}
)

