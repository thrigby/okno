function drawGauge() {
  gaugeData = new google.visualization.DataTable();
  gaugeData.addColumn('number', 'Engine');
  gaugeData.addColumn('number', 'Torpedo');
  gaugeData.addRows(2);
  gaugeData.setCell(0, 0, 120);
  gaugeData.setCell(0, 1, 80);

  gauge = new google.visualization.Gauge(document.getElementById('gauge'));
  gaugeOptions = {
      min: 0, 
      max: 280, 
      yellowFrom: 0,
      yellowTo: 140,
      redFrom: 140, 
      redTo: 280, 
      minorTicks: 10
  };
  gauge.draw(gaugeData, gaugeOptions);
}

function changeTemp(dir) {
  gaugeData.setValue(0, 0, gaugeData.getValue(0, 0) + dir * 25);
  gaugeData.setValue(0, 1, gaugeData.getValue(0, 1) + dir * 20);
  gauge.draw(gaugeData, gaugeOptions);
}

​