function toggleReadMore(event, index) {
    var dots = document.getElementById("dots" + index);
    var moreText = document.getElementById("more" + index);
    var btnText = document.getElementById("myBtn" + index);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

    // A etiketine tıklama olayını durdur
    event.preventDefault();
}