const gadamsvleli = document.querySelectorAll("#isari");
const movielists = document.querySelectorAll(".movie-list");

gadamsvleli.forEach((isari, i)=> {
    const widthration = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWidth / 300));
    let clickcounter = 0;
    const itemnumber = movielists[i].querySelectorAll("img").length;
    console.log(itemnumber);
    isari.addEventListener("click", function(){
        clickcounter++;
    if(itemnumber - (4 + clickcounter) + (4 - widthration) >= 0) {
        movielists[i].style.transform = `translateX(${movielists[i].
        computedStyleMap().get("transform")[0].x.value - 300}px)`;
    } else {
        movielists[i].style.transform = "translateX(0)";
        clickcounter = 0;
    }
   });
});