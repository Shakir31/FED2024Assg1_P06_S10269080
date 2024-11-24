document.getElementById("toggleBtn").onclick = function() {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0px";
    } else {
        sidebar.style.width = "250px";
    }
}

document.getElementById("closeBtn").onclick = function() {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0px";
    }
}
document.addEventListener("DOMContentLoaded", function(){
    const links = document.getElementsByTagName("a");
    for (let i = 0; i<links.length; i++) {
        links[i].onclick = function() {
            if (sidebar.style.width === "250px") {
                sidebar.style.width = "0px";
            }
        }
    }
})