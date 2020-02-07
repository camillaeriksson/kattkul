interface ProductPage {
    imgList: string[]
}

const balls: ProductPage = {
    imgList: [
        "./media/pics/bollar/boll1.jpeg",
        "./media/pics/bollar/boll2.jpeg",
        "./media/pics/bollar/boll3.jpg",
        "./media/pics/bollar/boll4.jpeg",
        "./media/pics/bollar/boll5.jpeg",
        "./media/pics/bollar/boll6.png",
    ]
}

const wip: ProductPage = {
    imgList: [
        "./media/pics/vippor/vippa1.jpeg",
        "./media/pics/vippor/vippa2.jpg",
        "./media/pics/vippor/vippa3.jpeg",
        "./media/pics/vippor/vippa4.jpg",
        "./media/pics/vippor/vippa5.jpeg",
        "./media/pics/vippor/vippa6.jpg",
    ]
}

function printBalls() {
    let mainContainer = document.querySelector(".product_pic_container") as HTMLElement;
    mainContainer.innerHTML = "";

    let imgDiv = document.createElement("div");

    imgDiv.className = "imgDiv";

    balls.imgList.forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.className = "product_pictures"
        imgDiv.appendChild(img);
    })

    mainContainer.appendChild(imgDiv);
}

function printWips() {
    let mainContainer = document.querySelector(".product_pic_container") as HTMLElement;
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
        button.innerHTML = "LÄGG I VARUKORG"
        imgDiv.appendChild(button);
        mainContainer.appendChild(imgDiv);
    })

}