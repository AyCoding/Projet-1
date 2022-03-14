// const ctx = document.getElementById('graph').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
            "DECEMBRE"],
        datasets: [{
            label: 'Relevés Pluviométriques',
            data: [99.5, 99.0, 95.5, 23.5, 66.5, 92.0, 102.0, 100.5, 164.0, 71.0, 159.0, 194.0],
            fill: true,
            borderWidth: 3,
            backgroundColor: ['#333'],
            borderColor: '#ff8000',
            tension: 0.1
        }]
    },
});

const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
    "DECEMBRE"]

let xhr = new XMLHttpRequest();
xhr.onload = function () {
    // console.log(this.response); // http://example.com/test


// pour tout les mois
//         for (let mois = 0; mois < MONTHS.length; mois++ ) {
//             // console.log(this.response[MONTHS[mois]]);
//
//             for (let day = 0; day < 31; day++) {
//                 console.log(MONTHS[mois])
//                 console.log(this.response['Jour'][day])
//             }
//         }


    // Pour tout les jours
    for (let i = 0; i < 31; i++) {
        // Affiche chaque lignes
        // console.log(this.response[i])


        // Pour tout les mois
        for (let mois = 0; mois < MONTHS.length; mois++) {
            // Affiche tous les jours
            console.log(MONTHS[mois])
            console.log(this.response[i][MONTHS[mois]])
        }
    }
};

xhr.open('GET', 'data/output/revele2017.json', true);
xhr.responseType = "json"; // Indique le type de fichier
xhr.send();