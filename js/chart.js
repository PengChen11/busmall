/* eslint-disable indent */
function updateChart (){
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
            title:{
                display:true,
                text:'Total Votes / Total Times Rendered',
                fontSize:20
            },
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

// function newChart(){
var ctx = document.getElementById('myChart').getContext('2d');

var newChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemNameArray,
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: '# of times rendered',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },]
    },
    options: {
        title:{
            display:true,
            text:'Total Votes / Total Times Rendered',
            fontSize:20
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
