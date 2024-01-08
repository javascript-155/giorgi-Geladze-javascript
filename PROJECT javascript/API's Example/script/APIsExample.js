function getAnimeQuotes() {
    const animeInput = document.getElementById('animeInput').value;
    const quoteList = document.getElementById('quoteList');
    
    quoteList.innerHTML = '';

    if (!animeInput.trim()) {
        const errorItem = document.createElement('li');
        errorItem.textContent = "ველი ცარიელია";
        quoteList.appendChild(errorItem);
        return;
    } else {
        fetch(`https://animechan.xyz/api/quotes/anime?title=${animeInput}`)
        .then(response => response.json())
        .then(quotes => {
            if (quotes.length === 0) {
                const noResultsItem = document.createElement('li');
                noResultsItem.textContent = 'ასეთი მონაცემი არ არსებობს';
                quoteList.appendChild(noResultsItem);
            } else {
                quotes.forEach(quote => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `"${quote.quote}" - ${quote.character}`;
                    quoteList.appendChild(listItem);
                });
            }
        })
        .catch(error => {
            console.error('Hata oluştu:', error);
            const errorItem = document.createElement('li');
            errorItem.textContent = 'ხარვეზი დაფიქსირდა, ხელახლა სცადეთ';
            quoteList.appendChild(errorItem);
        });
    }    
}

// ! მოცემულ api-ს აქვს სამომხმარებლო რაოდენობრივი შეზღუდვა
// ! ამიტომ, თუ error-ს აჩვენებს ნიშნავს, რომ ლიმიტი გადაივსო














// ! კლასის ვარიანტი
// ! სატესტო რეჟიმშია
// class AnimeQuoteFetcher {
//     constructor() {
//         this.quoteList = document.getElementById('quoteList');
//         this.input = document.getElementById('animeInput');
//         this.button = document.getElementById('getQuotesBtn');
//         this.initialize();
//     }

//     initialize() {
//         this.button.addEventListener('click', this.getAnimeQuotes.bind(this));
//     }

//     getAnimeQuotes() {
//         const animeInput = this.input.value.trim();

//         if (!animeInput) {
//             this.displayError("ველი ცარიელია");
//             return;
//         }

//         this.fetchQuotes(animeInput);
//     }

//     fetchQuotes(animeTitle) {
//         this.quoteList.innerHTML = '';

//         fetch(`https://animechan.xyz/api/quotes/anime?title=${animeTitle}`)
//             .then(response => response.json())
//             .then(quotes => {
//                 if (quotes.length === 0) {
//                     this.displayError("ასეთი მონაცემი არ არსებობს");
//                 } else {
//                     this.displayQuotes(quotes);
//                 }
//             })
//             .catch(error => {
//                 console.error('Hata oluştu:', error);
//                 this.displayError('ხარვეზი დაფიქსირდა, ხელახლა სცადეთ');
//             });
//     }

//     displayError(message) {
//         const errorItem = document.createElement('li');
//         errorItem.textContent = message;
//         this.quoteList.appendChild(errorItem);
//     }

//     displayQuotes(quotes) {
//         quotes.forEach(quote => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `"${quote.quote}" - ${quote.character}`;
//             this.quoteList.appendChild(listItem);
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const animeQuoteFetcher = new AnimeQuoteFetcher();
// });
