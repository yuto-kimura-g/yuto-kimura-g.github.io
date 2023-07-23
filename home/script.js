"use strict;"

window.onload = () => {
    // 背景 (particles.js)
    // ref: https://github.com/marcbruederlin/particles.js
    Particles.init({
        selector: ".background",
        maxParticles: (navigator.userAgent.match(/iPhone|Android.+Mobile/)) ? 50 : 100,
        sizeVariations: 50,
        color: ['#00bbdd', '#404B69', '#DBEDF3'],
        connectParticles: true
    });

    // タイプライター
    const typeSpeed = 100;
    const consoleElement = document.getElementById("typewriter");
    const messages = [
        "welcome here",
        "take your time",
        "have a nice day",
        "see also link below",
        "thanks for your visit",
    ];

    const typewriter = (args) => {
        consoleElement.textContent = "";
        args.message.split("").forEach((char, index) => {
            setTimeout(() => { // async
                consoleElement.textContent += char;
            }, typeSpeed * index);
        });
    };

    document.getElementById("run").addEventListener("click", () => {
        typewriter({
            message: messages[Math.floor(Math.random() * messages.length)]
        });
    });

}
