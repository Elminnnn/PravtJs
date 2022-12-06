const allBodyImgs = document.querySelector('.allbodyimgs');
const apiUrl = './data/news.json';

fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    })
    .then(data => {
        addImgs(data);

    })

function addImgs(cardsData) {
    for (let index = 0; index < cardsData.length; index++) {

        let cards = `<div class="card">
            <div class=" photo">`
        for (let j = 0; j < cardsData[index].images.length; j++) {
            if (cardsData[index].images.length == 1) {

                cards += `<img class="cardImg" src="${cardsData[index].images[j]}" alt="e">`;
                break;
            }
            else {
                cards += `<img class="imgg${j + 1}" src="${cardsData[index].images[j]}" alt="e">`;
            }
        }
        cards += `  </div >
            <div class="alts">
                <h2>${cardsData[index].title}</h2>
            </div>
            <div class="altfooter">
                <div class="dates">${cardsData[index].date}</div>
                <a target="_blank" href="https://pravt-nn.ru/news/novinki-amortizatory/">More <img
                        src="./assets/img/Arrow 2.png"> </a>
            </div>
        </div > `

        allBodyImgs.innerHTML += cards;
    }
}

