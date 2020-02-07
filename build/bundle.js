"use strict";
const menuIcon = document.querySelector(".hamburger-menu");
menuIcon.addEventListener("click", burgerMenu);
function burgerMenu() {
    const mobileNav = document.querySelector(".navbar");
    mobileNav.classList.toggle("change");
    menuIcon.classList.toggle("move");
}
let img = document.getElementById("img");
let images = ["./media/pics/cat1.jpg", "./media/pics/cat2.jpg", "./media/pics/cat3.jpg"];
let x = 0;
let slider = () => {
    if (x < images.length) {
        x++;
    }
    else {
        x = 1;
    }
    img ? img.innerHTML = "<img class='slider_pic' src=" + images[x - 1] + ">" : null;
};
setInterval(slider, 2000);
const balls = {
    imgList: [
        "./media/pics/bollar/boll1.jpeg",
        "./media/pics/bollar/boll2.jpeg",
        "./media/pics/bollar/boll3.jpg",
        "./media/pics/bollar/boll4.jpeg",
        "./media/pics/bollar/boll5.jpeg",
        "./media/pics/bollar/boll6.png",
    ]
};
const wip = {
    imgList: [
        "./media/pics/vippor/vippa1.jpeg",
        "./media/pics/vippor/vippa2.jpg",
        "./media/pics/vippor/vippa3.jpeg",
        "./media/pics/vippor/vippa4.jpg",
        "./media/pics/vippor/vippa5.jpeg",
        "./media/pics/vippor/vippa6.jpg",
    ]
};
function printBalls() {
    let mainContainer = document.querySelector(".product_pic_container");
    mainContainer.innerHTML = "";
    balls.imgList.forEach(url => {
        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";
        let img = document.createElement("img");
        img.src = url;
        img.className = "product_pictures";
        imgDiv.appendChild(img);
        let button = document.createElement("button");
        button.className = "buy_button";
        button.innerHTML = "LÄGG I VARUKORG";
        imgDiv.appendChild(button);
        mainContainer.appendChild(imgDiv);
    });
}
function printWips() {
    let mainContainer = document.querySelector(".product_pic_container");
    mainContainer.innerHTML = "";
    wip.imgList.forEach(url => {
        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";
        let img = document.createElement("img");
        img.src = url;
        img.className = "product_pictures";
        imgDiv.appendChild(img);
        let button = document.createElement("button");
        button.className = "buy_button";
        button.innerHTML = "LÄGG I VARUKORG";
        imgDiv.appendChild(button);
        mainContainer.appendChild(imgDiv);
    });
}
//# sourceMappingURL=bundle.js.map