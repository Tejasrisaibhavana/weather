google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    const res = JSON.parse(localStorage.getItem('sevenDayForecast'))

    const arrData = [
        ['Date', 'Min temp.', 'Max temp.']
    ]

    for(i=1;i<res.length;++i){
        const dateObj = new Date(res[i].dt * 1000)
        const orgDate = dateObj.toLocaleString("en-US", {dateStyle: "short" })
        const maxTemp = res[i].temp.max;
        const minTemp = res[i].temp.min;
        arrData.push([orgDate, minTemp, maxTemp])
    }

    var data = google.visualization.arrayToDataTable(arrData);

    var options = {
        title: 'Seven days weather info. (in Celsious)',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chartToDraw = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chartToDraw.draw(data, options);
}
