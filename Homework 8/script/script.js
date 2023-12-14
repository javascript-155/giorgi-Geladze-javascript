// ! ფაილის ატვირთვა
function upload() {
    return new Promise((resolve, reject) => {
        const inputFile = document.getElementById('inputFile');
        
        const file = inputFile.files[0];

        if(file){
            const reader = new FileReader();
            reader.onload = function(selectedFile){
                document.getElementById('area').value = selectedFile.target.result;
            }
            reader.readAsText(file);
        }
    });
}

// ! ტექსტის ზომა
function totalsymbols() {
    return new Promise((resolve, reject) => {
        const totalLengthElement = document.getElementById('area');
        const lengthValue = totalLengthElement.value;
        let arealength = 0;
        const readValue = document.getElementById('totalsymbols');

        for (let i = 0; i < lengthValue.length; i++) {
            arealength = arealength + 1;
        }

        if (arealength > 0) {
            readValue.innerHTML = arealength;
            document.getElementById('firstbr').style.display = 'none';
        } else {
            readValue.innerHTML = "ცარიელია, შეიყვანეთ ტექსტი";
            document.getElementById('firstbr').style.display = 'none';
        }
    });
}

// ! სიტყვების რაოდენობა
// ეს ერთი სენქრონულად დავწერე
function totalwords() {
    const totalLengthElement = document.getElementById('area');
    const toarray = totalLengthElement.value;
    const wordArray = toarray.split(' ');
    let words = wordArray.length;
    const wordvalue = document.getElementById('totalwords');

    if (words > 0) {
        wordvalue.innerHTML = words;
        document.getElementById('secondbr').style.display = 'none';
    } else {
        wordvalue.innerHTML = "ცარიელია, შეიყვანეთ ტექსტი";
        document.getElementById('secondbr').style.display = 'none';
    }
}

// ! ყველაზე გრძელი და მოკლე სიტყვა, ერთ ფუნქციაში
function longestandshortestword() {
    return new Promise((resolve, reject) => {
        const totalLengthElement = document.getElementById('area');
        const wordsvalue = totalLengthElement.value;
        const wordArray = wordsvalue.split(' ');
        const longestword = document.getElementById('longest');
        const shortestword = document.getElementById('shortest');

        let longest = '';
        let shortest = '';

        wordArray.forEach(word => {
            if (word.length > longest.length || longest === '') {
                longest = word;
            }

            if (word.length < shortest.length || shortest === '') {
                shortest = word;
            }
        });

        longestword.innerHTML = longest;
        shortestword.innerHTML = shortest;
        document.getElementById('fourthbr').style.display = 'none';

    });
}

// ! სიტყვების რაოდენობა გაყოფილი ასოების რაოდენობაზე
function arithmeticaverage() {
    return new Promise ((resolve, rejecr) => {
        const totalLengthElement = document.getElementById('area');
        const wordsvalue = totalLengthElement.value;
        const result = document.getElementById('arithmetic');

        const wordArray = wordsvalue.split(/\s+/);
        let wordsnumber = wordArray.length;

        let elementArray = wordArray.join('');
        let elementsnumber = elementArray.length;

        // სიტყვების რაოდენობა გაყოფილი ასოების რაოდენობაზე
        if(wordsnumber > 0 && elementsnumber > 0) {
            const counter = wordsnumber / elementsnumber;
            result.innerHTML = counter;
            document.getElementById('fivethbr').style.display = 'none';
        }
    });
}