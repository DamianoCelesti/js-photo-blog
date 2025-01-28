// Seleziono tutti gli elementi delle card
const cards = document.querySelectorAll('.card');

// Endpoint dell'API per ottenere i dati delle immagini e delle informazioni
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';



// Effettuo una chiamata GET utilizzando Axios
axios.get(endpoint)
    .then((response) => {
        //console.log(response);
        // Ottengo la risposta e accedo ai dati
        const data = response.data;
        //console.log(data);

        // Variabile per tracciare l'indice delle card
        let index = 0;
        // Itero sui dati ricevuti
        for (let i = 0; i < data.length; i++) {
            const infoViaggi = data[i];
            //console.log(infoViaggi);

            // Popolo la card corrente con le informazioni ottenute dall'API
            cards[index].innerHTML += `
            <img src="./img/pin.svg" class="pin" alt="pin">
            <img src="${infoViaggi.url}" class="card-img-top p-3" alt="img ${index + 1}">
            <div class="card-body">
                <p class="card-text mb-0 ">${infoViaggi.date}</p>
                <h2 class="card-title text-uppercase fw-bold">${infoViaggi.title}</h2> 
            </div>`;
            //console.log('123', cards[index]);
            // Seleziono l'overlay e l'immagine per l'evento di click
            const hidden = document.querySelector('.d-none');
            const img = document.querySelector('.img-fluid');
            // Aggiungo un evento di click alla card per mostrare l'overlay
            cards[index].addEventListener('click', () => {
                hidden.classList.remove('d-none');
                img.src = infoViaggi.url;
            });
            // Seleziono il bottone per chiudere l'overlay
            const button = document.querySelector('.btn');
            // Aggiungo un evento di click al bottone per nascondere l'overlay
            button.addEventListener('click', () => {
                hidden.classList.add('d-none');

            });
            // Incremento l'indice per passare alla prossima card
            index++;
        }


    })


