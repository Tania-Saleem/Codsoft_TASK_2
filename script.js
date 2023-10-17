
    function toggleMenu() {
        const menu = document.querySelector(".manu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
function openCV(){
    var pdfPath='./assets/CV.pdf';
    window.open(pdfPath,'_blank');
}

function openLinkedIn(){
    window.open("https://www.linkedin.com/");
}

function openGitHub(){
    window.open("https://www.github.com/");
}