let icerikBasliklari = document.querySelectorAll("#content .icerik-basliklari button");
let languageChange = document.getElementById("selectLanguage");
let sidebarA = document.querySelectorAll("header .sidebar a");
let navA = document.querySelectorAll("header .nav a");
window.addEventListener("DOMContentLoaded", function (){
    initSlider();
    languageChange.selectedIndex = (localStorage.getItem("language") === "tr") ? 0 : 1;
    languageSwitch();

    (function(){
        localdarkmode = localStorage.getItem("dark-mode");
        if(localdarkmode === "true"){
            themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>`
            themebtn.classList.toggle("dark-mode", localdarkmode === "true");
            document.body.classList.add("dark-mode");
        }
        else{
            themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`
            themebtn.classList.toggle("dark-mode", localdarkmode === "true");
            document.body.classList.remove("dark-mode");
        }
    })();
});
window.addEventListener("scroll",function (){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

function showSidebar(){
    const screenwidth = window.innerWidth;
    const sidebar = document.querySelector(".sidebar");
    //sidebar.style.display= "flex"
    if(screenwidth < 800){
        sidebar.style.width = "50%";
    }
    else{
        sidebar.style.width = "270px";
    }
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    //sidebar.style.display= "none";
    sidebar.style.width = "0"; // daha yumuşak bir geçiş için böyle yaptım
}

function addContent(konu){
    const paragraph = document.getElementById("picerik")
    if (konu === 'icerik1'){
        paragraph.textContent = (languageChange.value === "tr") ? "Kısaca içerik": "Briefly content";
        activeButton("icerik1");
    }
    else if (konu === 'icerik2'){
        paragraph.textContent = (languageChange.value === "tr") ? "tarih içerik": "History content";
        activeButton("icerik2");
    }
    else if (konu === 'icerik3'){
        paragraph.textContent = (languageChange.value === "tr") ? "Kültür içerik": "Culture content";
        activeButton("icerik3");
    }
    else if (konu === 'icerik4'){
        paragraph.textContent = (languageChange.value === "tr") ? "Gelişim içerik": "Development content";
        activeButton("icerik4");
    }
    else if (konu === 'icerik5'){
        paragraph.textContent = (languageChange.value === "tr") ? "Günümüz içerik": "Today content";
        activeButton("icerik5");
    }
}

function activeButton(y){
    const buttons = document.querySelectorAll(".icerik-basliklari button");
    buttons.forEach(x => {
        if(x.classList.contains(y)){
            x.classList.add("active");
        }
        else{
            x.classList.remove("active");
        }
    })
}

const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("#menu-btn1");
window.addEventListener("click",function (event){
    if(!sidebar.contains(event.target) && !btn.contains(event.target)){
        sidebar.style.width = "0";
    }
})
function bactotop(){
    window.scrollTo(0, 0);
}
let localdarkmode = "false";
let themebtn = document.getElementById("theme-btn");

function changetheme(){
    if(themebtn.classList.contains("dark-mode")){
        // aydınlıga geçiş
        themebtn.classList.add("hide");
        setTimeout(()=>{
            themebtn.classList.remove("hide");
            themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`
        },200);
        themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`
        localStorage.setItem("dark-mode", "false");
        themebtn.classList.toggle("dark-mode");
        document.body.classList.remove("dark-mode");
    }else{
        // karanliga geçiş
        themebtn.classList.add("hide");
        setTimeout(()=>{
            themebtn.classList.remove("hide");
            themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>`
        },200);
        themebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>`
        themebtn.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", "true");
        document.body.classList.add("dark-mode");
    }
}

let sliderimg = document.querySelectorAll('.carousel .slides img');
let indexofimg = 0;
let intervalId;
function initSlider(){
    if (sliderimg.length > 0){
        sliderimg[indexofimg].classList.add("active");
        carouselAddcontent(indexofimg);
        autoSlider();
    }
}
function autoSlider(){
    if(intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(nextImg, 5000);
}
function prevImg(){
    sliderimg[indexofimg].classList.remove("active");
    indexofimg = (indexofimg + 2) % sliderimg.length;
    sliderimg[indexofimg].classList.add("active")
    carouselAddcontent(indexofimg);
    autoSlider();
}
function nextImg(){
    sliderimg[indexofimg].classList.remove("active");
    indexofimg = (indexofimg + 1) % sliderimg.length;
    sliderimg[indexofimg].classList.add("active");
    carouselAddcontent(indexofimg);
    autoSlider();
}
function carouselAddcontent(index){
    let p = document.querySelector('.carousel .aciklama p');
    let h = document.querySelector('.carousel .aciklama h1');
    switch (index){
        case 0:
            h.innerHTML = `Anıtkabir`;
            p.innerHTML = `Anıtkabir hakkında`;
            break;
        case 1:
            h.innerHTML = `Kuş Cenneti`;
            p.innerHTML = `Kuş Cenneti hakkında`;
            break;
        case 2:
            h.innerHTML = `Ankara Kalesi`;
            p.innerHTML = `Ankara Kalesi Hakkında`;
            break;
    }
}
function languageSwitch(){
    switch (languageChange.value) {
        case "tr":
            localStorage.setItem("language", "tr");
            document.querySelector(".footer-container h2").textContent = "Bizimle Temasa Geçin";
            document.querySelector(".footer-container p").textContent = "Teklif almak için aşağıdaki \"Teklif Al\" bölümünde bulunan proje brief formunu eksiksiz şekilde doldurmanızı rica ederiz.";
            document.querySelector(".footer-container .footer-btn #a1").textContent = "İletişim";
            document.querySelector(".footer-container .footer-btn #a2").textContent = "Bize Ulaşın";
            document.querySelector("#content #picerik").textContent = "İçerik";
            icerikBasliklari[0].textContent = "Kısaca";
            icerikBasliklari[1].textContent = "Tarih";
            icerikBasliklari[2].textContent = "Kültür";
            icerikBasliklari[3].textContent = "Gelişim";
            icerikBasliklari[4].textContent = "Günümüz";
            sidebarA[1].textContent = "Anasayfa";
            sidebarA[2].textContent = "Tarih";
            sidebarA[3].textContent = "Hakkında";
            sidebarA[4].textContent = "İletişim";
            navA[0].textContent = "Anasayfa";
            navA[1].textContent = "Tarih";
            navA[2].textContent = "Hakkında";
            navA[3].textContent = "İletişim";
            break;

        case "en":
            localStorage.setItem("language", "en");
            document.querySelector(".footer-container h2").textContent = "Contact Us";
            document.querySelector(".footer-container p").textContent = "To get an offer, please fill in the project brief form in the ‘Get Offer’ section below.";
            document.querySelector(".footer-container .footer-btn #a1").textContent = "Communication";
            document.querySelector(".footer-container .footer-btn #a2").textContent = "Contact us";
            document.querySelector("#content #picerik").textContent = "Content";
            icerikBasliklari[0].textContent = "Briefly";
            icerikBasliklari[1].textContent = "History";
            icerikBasliklari[2].textContent = "Culture";
            icerikBasliklari[3].textContent = "Development";
            icerikBasliklari[4].textContent = "Today";
            sidebarA[1].textContent = "Home";
            sidebarA[2].textContent = "History";
            sidebarA[3].textContent = "About";
            sidebarA[4].textContent = "Contact";
            navA[0].textContent = "Home";
            navA[1].textContent = "History";
            navA[2].textContent = "About";
            navA[3].textContent = "Contact";
            break;
    }
}
languageChange.addEventListener("change", function() {
    languageSwitch();
});

