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