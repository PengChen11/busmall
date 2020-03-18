/* eslint-disable indent */


function newChart(){
    var deleteEl = document.getElementById('myChart');
    deleteEl.remove();
    var findChartEl = document.getElementById('chart');
    var newChartEl = document.createElement('canvas');
    newChartEl.id = 'myChart';
    findChartEl.appendChild(newChartEl);
    var ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemNameArray,
        datasets: [{
            label: '# of Votes',
            data: clickArray,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: '# of times rendered',
            data: renderArray,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
}
