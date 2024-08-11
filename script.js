window.addEventListener("scroll",function (){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display= "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
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

//js ile eklediğim metin biraz daha yumuşak gelsin