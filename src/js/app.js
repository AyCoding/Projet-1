let myChart;

function buildChart() {
    const ctx = document.getElementById('graph').getContext('2d');

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: selected_data["dates"],
            datasets: [{
                label: '2017',
                data: selected_data["values"],
                borderWidth: 3,
                pointRadius: 0,
                backgroundColor: 'rgba(0, 168, 235, 0.5)',
                borderColor: 'rgba(0, 168, 235, 1)',
                tension: .2
            },
                {
                    label: "2018",
                    // data: [80, 50, 16, 34.8],
                    data: test,
                    borderWidth: 3,
                    pointRadius: 0,
                    backgroundColor: 'rgba(235,196,0,0.5)',
                    borderColor: 'rgba(235,196,0, 1)',
                    tension: 0.2
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

/* == == == == == == == == == */


/* == == == == == == == == == */
let selected_data;

const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
    "DECEMBRE"]
/* == == == == == == == == == */


/* == == == == == == == == == */
let xhr = new XMLHttpRequest();
xhr.onload = function () {

    selected_data = {
        "dates": MONTHS,
        "values": this.response
    }

    buildChart(selected_data);
    console.log(selected_data);
};

xhr.open('GET', 'data/output/revele2017.json', true);
xhr.responseType = "json"; // Indique le type de fichier
xhr.send();
/* == == == == == == == == == */

/* == == == == == == == == == */
let TwoK18 = new XMLHttpRequest();
TwoK18.onload = function () {

    selected_data = {
        "dates": MONTHS,
        "values": this.response
    }
    // console.log(selected_data["values"])
}

TwoK18.open('get', 'data/output/revele2018.json', true);
TwoK18.responseType = "json"; // Indique le type de fichier
TwoK18.send();
/* == == == == == == == == == */


/* == == == == == == == == == */
url = [
    "data/output/revele2015.json",
    "data/output/revele2016.json",
    "data/output/revele2017.json",
    "data/output/revele2018.json"
]

test = [10, 30, 20, 40, 60, 50, 80, 70, 100, 90, 120, 110]
/* == == == == == == == == == */