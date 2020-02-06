let img: HTMLElement | null = document.getElementById("img");

let images = ["./media/pics/cat1.jpg", "./media/pics/cat2.jpg", "./media/pics/cat3.jpg"];


type slideFunc = () => void

let x = 0;

let slider: slideFunc = () => {
    if (x < images.length) {
        x++;
    } else {
        x = 1;
    }

    img ? img.innerHTML = "<img class='slider_pic' src=" + images[x - 1] + ">" : null
}

setInterval(slider, 2000) 