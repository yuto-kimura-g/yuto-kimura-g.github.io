
const typewriter = (param) => {
    const ele = document.querySelector(param.ele);
    const speed = param.speed;
    const message = param.message.split("");
    console.log(message);
    message.forEach((char, index) => {
        setTimeout(() => {
            ele.textContent += char;
        }, speed * index);
    });
};

document.addEventListener("load",
    typewriter({
        ele: "#typewriter",
        speed: 100,
        message: "('v')/ welcome here!"
    })
);
