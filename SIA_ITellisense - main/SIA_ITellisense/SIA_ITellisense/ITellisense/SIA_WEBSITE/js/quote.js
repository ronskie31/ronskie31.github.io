const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'dd62a3f28dmsh50cfb48181bb32ap11369djsnbefc7fda9a1e',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: '{}'
};

fetch('https://quotel-quotes.p.rapidapi.com/quotes/random', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        let html = document.getElementById('text').innerHTML = response.quote;
        document.getElementById('author').innerHTML = '- ' + response.name + ' -';
    })
    .catch(err => {
        console.log(err);
    });