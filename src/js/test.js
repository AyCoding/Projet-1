let myChart;

function buildChart() {
    const ctx = document.getElementById('graph').getContext('2d');

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: selected_data["dates"],
            // labels: ["Oklm", "Henry"],
            datasets: [{
                label: 'Relevés Pluviométriques',
                data: selected_data["values"],
                // data: [1, 5, 20, 5],
                borderWidth: 3,
                pointRadius: 0,
                backgroundColor: 'rgba(0, 168, 235, 0.5)',
                borderColor: 'rgba(0, 168, 235, 1)',
                tension: 0.1
            }]
        }
    })
}

let selected_data;

const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
    "DECEMBRE"]

let xhr = new XMLHttpRequest();
xhr.onload = function () {
    // Pour tout les jours
    for (let i = 0; i < 31; i++) {
        // Affiche chaque lignes
        console.log(this.response[i]["Jour"])

        // Pour tout les mois
        for (let mois = 0; mois < MONTHS.length; mois++) {
            // Affiche tous les jours
            // console.log(MONTHS[mois])
            // console.log(this.response[i][MONTHS[mois]])

            selected_data = {
                "dates": MONTHS[mois],
                "values": this.response[i][MONTHS[mois]]
            }
            console.log(selected_data["dates"])
        }
    }
    buildChart(selected_data);
};

xhr.open('GET', 'data/output/revele2017.json', true);
xhr.responseType = "json"; // Indique le type de fichier
xhr.send();

// dates[0]