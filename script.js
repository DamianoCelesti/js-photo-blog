// Seleziono tutti gli elementi delle card
const cards = document.querySelectorAll('.col');
console.log(cards);

// Endpoint dell'API
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';




axios.get(endpoint)
    .then((response) => {
        console.log(response);
        const data = response.data;
        console.log(data);
        
        // for (img of data) {
        //     console.log(img.url);
        //     const imgVacanze = img.url
        //     cards.innerHTML += `<img src="${imgVacanze}" class="card-img-top p-3" alt="img 1">`;
        // }
        let index = 0;
        for(let i = 0; i < data.length; i++){
            const infoViaggi = data[i];
            //console.log(infoViaggi.url);
            
            cards[index].innerHTML += `<div class="card">
            <img src="./img/pin.svg" class="pin" alt="pin">
            <img src="${infoViaggi.url}" class="card-img-top p-3" alt="img ${index +1}">
            <div class="card-body">
                <p class="card-text mb-0 ">${infoViaggi.date}</p>
                <h2 class="card-title text-uppercase fw-bold">${infoViaggi.title}</h2> 
            </div>
            </div>`;
            index++;
        } 
        
        
    })