let img = document.getElementById("img") as HTMLElement;

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

setInterval(slide, 2000) 