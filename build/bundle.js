"use strict";
let img = document.getElementById("img");
let images = ["./media/pics/cat1.jpg", "./media/pics/cat2.jpg", "./media/pics/cat3.jpg"];
let x = 0;
function slide() {
    if (x < images.length) {
        x = x + 1;
    }
    else {
        x = 1;
    }
    img.innerHTML = "<img src=" + images[x - 1] + ">";
}
setInterval(slide, 2000);
let message2 = "Wohoo cats!!";
console.log(message2);
//# sourceMappingURL=bundle.js.map