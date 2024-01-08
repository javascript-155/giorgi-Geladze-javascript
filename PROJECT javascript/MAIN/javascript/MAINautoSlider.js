// ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const autoSlider = new MAINAutoSlider();
    autoSlider.start();
});

class MAINAutoSlider {
    constructor() {
        this.index = 0;
        this.slides = document.getElementsByClassName("myPictures");
    }

    showSlide(index) {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        this.slides[index].style.display = "block";
    }

    nextSlide() {
        this.index = (this.index + 1) % this.slides.length;
        this.showSlide(this.index);
    }

    start() {
        this.showSlide(this.index);
        setInterval(() => {
            this.nextSlide();
        }, 10000);
    }
}
// -----------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     let index = 0;

//     function MAINautoSlider() {
//         let i;
//         let Slides = document.getElementsByClassName("myPictures");

//         for (i = 0; i < Slides.length; i++) {
//             Slides[i].style.display = "none";
//         }

//         index = index + 1;

//         if (index > Slides.length) {
//             index = 1;
//         }

//         Slides[index - 1].style.display = "block";

//         setTimeout(MAINautoSlider, 1000);
//     }

//     MAINautoSlider();
// });

// class MAINautoSlider {
//     constructor() {
//         this.i;
//         this.Slides = document.getElementsByClassName("myPictures");
//     }
// }