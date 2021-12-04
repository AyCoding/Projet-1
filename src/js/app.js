const ctx = document.getElementById('graph').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE",
        "DECEMBRE"],
        datasets: [{
            label: 'Relevés Pluviométriques',
            data: [99.5, 99.0, 95.5, 23.5, 66.5, 92.0, 102.0, 100.5, 164.0, 71.0, 159.0, 194.0],
            
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});