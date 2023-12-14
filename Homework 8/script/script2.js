// ! ფოტოს ატვირთვა
function photouploader() {
    return new Promise((resolve, reject) => {
        const inputfile = document.getElementById('file');
        const imgElement = document.getElementById('img');

        const file = inputfile.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (img) {
                imgElement.src = img.target.result;
            };

            reader.readAsDataURL(file);
        }
    });
}
