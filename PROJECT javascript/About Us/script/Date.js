function calculateElapsedTime(startDate) {
    const startTime = new Date(startDate);
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function updateElapsedTime() {
    const startDate = "2023-10-07T10:45:50";
    const elapsedTime = calculateElapsedTime(startDate);

    const elapsedTimeElement = document.querySelector("#elapsed-time");
    elapsedTimeElement.innerHTML = `დაახლოებით ${elapsedTime.days} დღე, ${elapsedTime.hours} საათი, ${elapsedTime.minutes} წუთი, ${elapsedTime.seconds} წამია.`;
}

// İlk çağrı
updateElapsedTime();

// Her saniye güncelle
setInterval(updateElapsedTime, 1000);

console.log(elapsedTimeElement);