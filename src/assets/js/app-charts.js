/* Dashboard Stacked bar Chart */
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: '#4bafb4',
        data: [
           5, -15, 20, 30, 40
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: '#517087',
        data: [
            5, 15, -20, 30, 40
    ]
    }, {
        label: 'Dataset 3',
        backgroundColor: '#dcdada',
        data: [
            5, 15, 20, -30, 40
        ]
    }]

};


/* End Dashboard Stacked Bar Chart */


var pieChart1Config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
              25,25,25,25
            ],
            backgroundColor: [
                '#4bafb4',
                '#517087',
                '#dcdada',
                '#ef3d23'
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'General Managers',
            'Managers',
            'Front Line Leaders',
            'Admin',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        aspectRatio: 1,
        title: {
            display: true,
            // text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};



var pieChart2Config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
              25,25,25,25
            ],
            backgroundColor: [
                '#4bafb4',
                '#517087',
                '#dcdada',
                '#ef3d23'
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'General Managers',
            'Managers',
            'Front Line Leaders',
            'Admin',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        aspectRatio: 1,
        title: {
            display: true,
            // text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var pieChart3Config = {

    data: {
        datasets: [{
            data: [
                10,20,30,40
            ],
            backgroundColor: [
                '#4bafb4',
                '#517087',
                '#dcdada',
                '#ef3d23'

            ],
            label: 'Dataset 1'
        }],
        labels: [
            'General Managers',
            'Managers',
            'Front Line Leaders',
            'Admin',

        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            display: false
        },
        aspectRatio: 1,
        title: {
            display: true,
            position: 'bottom',
            text:   'Production Team',
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var pieChart4Config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                25, 75
            ],
            backgroundColor: [
                '#ef3d23',
                "#a3a3a2"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Managers',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            display: false
        },
        aspectRatio: 1,
        title: {
            display: true,
             text: 'Managers',
            position: 'bottom',
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var pieChart5Config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                25, 75
            ],
            backgroundColor: [
                '#517087',
                "#a3a3a2"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Supervisors',

        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            display: false
        },
        aspectRatio: 1,
        title: {
            display: true,
            text: 'Supervisors',
            position: 'bottom',
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var pieChart6Config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
              25, 75
            ],
            backgroundColor: [
                '#dcdada',

            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Design Team',

        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            display: false
        },
        aspectRatio: 1,
        title: {
            display: true,
            text:  'Design Team',
            position: 'bottom',
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var pieChart7Config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                25,25,25,25
            ],
            backgroundColor: [
                '#4bafb4',
                '#517087',
                '#dcdada',
                '#ef3d23'
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'General Managers',
            'Managers',
            'Front Line Leaders',
            'Admin',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        aspectRatio: 1,
        title: {
            display: true,
            // text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

window.onload = function() {
    var pieChart2 = document.getElementById('pieChart2Canvas').getContext('2d');
    window.myDoughnut = new Chart(pieChart2, pieChart2Config);


    var pieChart1 = document.getElementById('salary-cost-heat-map').getContext('2d');
    window.myDoughnut = new Chart(pieChart1, pieChart1Config);

    var pieChart3 = document.getElementById('polarChart3').getContext('2d');
    window.myPolarArea  = new Chart.PolarArea(pieChart3, pieChart3Config);



    var pieChart7 = document.getElementById('pieChart7Canvas').getContext('2d');
    window.myDoughnut = new Chart(pieChart7, pieChart7Config);


    var ctx = document.getElementById('stacked-bar-chart').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                // text: 'MANPOWER USAGES'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    var barChart2 = document.getElementById('stacked-bar-chart-2').getContext('2d');
    window.myBar = new Chart(barChart2, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                // text: 'MANPOWER USAGES'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};