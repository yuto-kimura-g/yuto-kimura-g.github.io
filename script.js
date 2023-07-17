// 背景 (particles.js)
// ref: https://github.com/marcbruederlin/particles.js
Particles.init({
    selector: ".background",
    // pc,tablet: (100, 50)
    // smapho: (50, 50)
    maxParticles: 100,
    // maxParticles: 50,
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
    // TODO: messagesをAIのAPIとか使って自動生成する？
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
