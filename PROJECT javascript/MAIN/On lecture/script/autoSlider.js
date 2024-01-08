document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;

    function autoSlider() {
        let i;
        let slides = document.getElementsByClassName("myPictures");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Tüm resimleri gizle
        }

        slideIndex = slideIndex + 1;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";  // Bir sonraki resmi göster

        setTimeout(autoSlider, 2000);
    }

    autoSlider();
});
