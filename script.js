// Seleziono tutti gli elementi delle card
const cards = document.querySelectorAll('.card');

// Endpoint dell'API
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';




axios.get(endpoint)
    .then((response) => {
        //console.log(response);
        const data = response.data;
        //console.log(data);
        
        let index = 0;
        for(let i = 0; i < data.length; i++) {
            const infoViaggi = data[i];
            //console.log(infoViaggi);
            
            cards[index].innerHTML += `
            <img src="./img/pin.svg" class="pin" alt="pin">
            <img src="${infoViaggi.url}" class="card-img-top p-3" alt="img ${index +1}">
            <div class="card-body">
                <p class="card-text mb-0 ">${infoViaggi.date}</p>
                <h2 class="card-title text-uppercase fw-bold">${infoViaggi.title}</h2> 
            </div>`;
            //console.log('123', cards[index]);
            

            
            index++;
        } 
        
        
        

});


const hidden = document.querySelector('.hidden');

for (let i = 0; i < cards.length; i++) {
    let currentCard = cards[i];
    currentCard.addEventListener('click', () => {
        hidden.classList.remove('hidden');
    });
}


const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    hidden.classList.add('hidden');
})