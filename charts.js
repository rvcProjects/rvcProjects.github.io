google.charts.load('current', {'packages':['sankey','corechart', 'bar', 'calendar']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
	drawChartP1();
	drawChartP2();
	drawChartP3();
	drawChartP4();
	drawChartP5();
	}

function drawChartP1() {
    var data = google.visualization.arrayToDataTable([
        ["Año", "Porcentaje", { role: "style" } ],
        ["2008", 44.4, "orange"],
        ["2010", 46.1, "red"],
        ["2012", 45.5, "orange"],
        ["2014", 46.2, "red"],
        ["2016", 43.6, "orange"],
        ["2018", 41.9, "yellow"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Porcentaje de población en situación de pobreza",
        width: 400,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: 'none' },
      };
      var chart = new google.visualization.BarChart(document.getElementById("p1Chart"));
      chart.draw(view, options);
	}

function drawChartP2() {
	var data = google.visualization.arrayToDataTable([
            ["Año", "Porcentaje", { role: "style" } ],
            ["2008", 32.3, "red"],
            ["2010", 28.1, "gold"],
            ["2012", 28.6, "gold"],
            ["2014", 26.3, "yellow"],
            ["2016", 26.8, "yellow"],
            ["2018", 29.3, "orange"]
            
          ]);
    
          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: "Porcentaje de población vulnerable por carencias sociales",
            width: 400,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" }
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("p2Chart"));
          chart.draw(view, options);

	}

function drawChartP3() {
	var data = google.visualization.arrayToDataTable([
        ['Año',  'MDP'],
        ['2008', 8.4],
        ['2010', 6.9],
        ['2012', 6.5],
        ['2014', 4.4],
        ['2016', 6.5],
        ['2018', 6.5]
      ]);

      var options = {
        title: 'Población con al menos una carencia social',
        vAxis: {title: 'Millones de personas'},
        width: 400,
        height: 400,
        legend: { position: "bottom" },
        isStacked: true,
        colors: ['red'] 
      };

      var chart = new google.visualization.SteppedAreaChart(document.getElementById('p3Chart'));

      chart.draw(data, options);
	}

function drawChartP4() {
	var data = google.visualization.arrayToDataTable([
        ['ID',     'Porcentaje', 'MDP',  'Gradiente'],
        ['2008',   21.9,         24.5,         24.5 ],
        ['2010',   20.7,         23.7,         23.7 ],
        ['2012',   19.2,         22.6,         22.6 ],
        ['2014',   18.7,         22.4,         22.4 ],
        ['2016',   17.4,         21.3,         21.3 ],
        ['2018',   16.9,         21.1,         21.1 ]
      ]);

      var options = {
        colorAxis: {colors: ['orange', 'red']},
        title: "Población con rezago educativo",
            width: 400,
            height: 400,
      };

	var chart = new google.visualization.BubbleChart(document.getElementById('p4Chart'));
	chart.draw(data, options);
	}

function drawChartP5() {
	var data = google.visualization.arrayToDataTable([
        ['Año', 'Porcentaje'],
        ['2008',  65  ],
        ['2010',  60.7],
        ['2012',  61.2],
        ['2014',  58.5],
        ['2014',  55.8],
        ['2018',  57.3]
      ]);

      var options = {
        title: 'Población con carencia por acceso a la seguridad social',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['orange'],
        crosshair: {
            color: '#000',
            trigger: 'both'
          }
      };

      var chart = new google.visualization.LineChart(document.getElementById('p5Chart'));

      chart.draw(data, options);
;
	}