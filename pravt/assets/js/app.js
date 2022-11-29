const allBodyImgs=document.querySelector('.allbodyimgs');
const apiUrl= './data/news.json';

fetch(apiUrl)
.then(response =>{
    if (response.ok) {
      return response.json();  
    }else{
        throw new Error('error');
    }
} )
.then(data =>{
    addImgs(data);
})

function addImgs(cards){
    for (let index = 0; index < cards.length; index++){
        if (index==0 ||index==2) {
            cards=`<div class="card">
            <div class=" photo firstimgs">
                <img class="imgg1" src="${cards[index].url.foreach(url => url.)" alt="e">
                <img class="imgg2" src="${cards[index].url}" alt="e">
            </div>
            <div class="alts">
                <h2>${cards[index].title}</h2>
            </div>
            <div class="altfooter">
                <div class="dates">${cards[index].date}</div>
                <a target="_blank" href="https://pravt-nn.ru/news/novinki-amortizatory/">More <img
                        src="./assets/img/Arrow 2.png"> </a>
            </div>
        </div>`
        }else{
            cards=`<div class="card">
            <div class=" photo secondimgs">
                <img src="${cards[index].url}" alt="e">
            </div>
            <div class="alts">
                <h2>${cards[index].title}</h2>
            </div>
            <div class="altfooter ">
                <div class="dates">${cards[index].date}</div>
                <a target="_blank" href="https://pravt-nn.ru/news/novinki-amortizatory/">More <img
                        src="./assets/img/Arrow 2.png"> </a></span>
            </div>

        </div>`
        }
        allBodyImgs.innerHTML+=cards; 
    }
}
