const ctx = document.getElementById('graph').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
        "DECEMBRE"],
        datasets: [{
            label: 'Relevés Pluviométriques',
            data: [99.5, 99.0, 95.5, 23.5, 66.5, 92.0, 102.0, 100.5, 164.0, 71.0, 159.0, 194.0],
            fill: true,
            borderWidth: 2,
            backgroundColor: ['#333333'],
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                // beginAtZero: true
            }
        }
    }
});

const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
"DECEMBRE"]
 
let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5500/data/output/revele2017.json', true);
    xhr.onload = function () {
      console.log(xhr.responseURL); // http://example.com/test
    
    // Pour tout les jours
    for (let i = 0; i < 31; i++) {
        // Affiche chaque lignes
        console.log(xhr.response[i])

        // Pour tout les mois
        for (let mois = 0; mois < MONTHS.length; mois++) {
        // Affiche tous les jours 
        //   console.log(xhr.response[i][MONTHS[mois]])
    }
}

let day_one = xhr.response[1]["JANVIER"]
console.log(day_one)

};
xhr.send();

const info = xhr.responseType = "json" // Indique le type de fichier