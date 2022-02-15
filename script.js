// 2022/02/15@Yuto02D2

const profile = document.getElementById("profile-section");
const developEnvironment = document.getElementById("develop-environment-section");
const experience = document.getElementById("experience-section");


window.addEventListener("load", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    profile.style.display = "none";
    developEnvironment.style.display = "none";
    experience.style.display = "none";
});


document.getElementById("header-logo").addEventListener("click", () => {
    window.alert("このアイコンは，私が最近始めた「ペンギンの島」というゲームのワンシーンです．\nかわいいですね");
});


document.getElementById("toggle-profile").addEventListener("click", () => {
    if (profile.style.display == "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
});
document.getElementById("toggle-develop-environment").addEventListener("click", () => {
    if (developEnvironment.style.display == "none") {
        developEnvironment.style.display = "block";
    } else {
        developEnvironment.style.display = "none";
    }
});
document.getElementById("toggle-experience").addEventListener("click", () => {
    if (experience.style.display == "none") {
        experience.style.display = "block";
    } else {
        experience.style.display = "none";
    }
});


document.getElementById("easter-egg").addEventListener("click", () => {
    window.open("https://www.google.com/search?q=pacman");
});
