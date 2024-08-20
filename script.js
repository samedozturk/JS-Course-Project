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
        paragraph.textContent = "Kısaca içerik";
        activeButton("icerik1");
    }
    else if (konu === 'icerik2'){
        paragraph.textContent = "Tarih içerik";
        activeButton("icerik2");
    }
    else if (konu === 'icerik3'){
        paragraph.textContent = "Kültür içerik";
        activeButton("icerik3");
    }
    else if (konu === 'icerik4'){
        paragraph.textContent = "Gelişim içerik";
        activeButton("icerik4");
    }
    else if (konu === 'icerik5'){
        paragraph.textContent = "Günümüz içerik";
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
const btn = document.querySelector("#menu-btn");
window.addEventListener("click",function (event){
    if(!sidebar.contains(event.target) && !btn.contains(event.target)){
        sidebar.style.width = "0";
    }
})