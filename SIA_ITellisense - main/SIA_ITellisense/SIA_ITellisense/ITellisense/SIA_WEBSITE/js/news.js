const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dd62a3f28dmsh50cfb48181bb32ap11369djsnbefc7fda9a1e',
        'X-RapidAPI-Host': 'rapid-tech-news.p.rapidapi.com'
    }
};

fetch('https://rapid-tech-news.p.rapidapi.com/api', option)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let output = "";
        for (var i in response) {
            output += `
               
        `;
        }

        if (output !== "") {
            $("#newsResults").html(output);
        }
    })
    .catch(err => console.error(err));