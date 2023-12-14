function mediaUploader() {
    const inputfile = document.getElementById('fileInput');
    const imgElement = document.getElementById('img');
    const videoElement = document.getElementById('video');
    const textElement = document.getElementById('text');
    const file = inputfile.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (media) {
            const fileType = file.type.toLowerCase();

            if (fileType.indexOf('image/') === 0) {
                imgElement.src = media.target.result;
                videoElement.style.display = 'none';
                textElement.style.display = 'none';

            } else if (fileType.indexOf('video/')) {
                videoElement.src = media.target.result;
                videoElement.style.display = 'block';
                imgElement.style.display = 'none';
                textElement.style.display = 'none';

            } else if (fileType.indexOf('text/')) {
                textElement.textContent = media.target.result;
                textElement.style.display = 'block';
                imgElement.style.display = 'none';
                videoElement.style.display = 'none';

            } else {
                alert('ფაილი მიუწვდომელია');
            }
        };

        if (file.type.toLowerCase().indexOf('image/') || file.type.toLowerCase().indexOf('video/')) {
            reader.readAsDataURL(file);
        } else if (file.type.toLowerCase().indexOf('text/')) {
            reader.readAsText(file);
        } else {
            alert('ფაილი მიუწვდომელია');
        }
    }
}