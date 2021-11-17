

  
am4core.ready(function() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("languages", am4charts.PieChart);
    var title = chart.titles.create();
    title.text = "Langages De Programmation";
    title.fontSize = 25;
    title.marginBottom = 30;
    
    // Add data
    chart.data = [ {
        "lang": "Bash",
        "%": 2.5
      },
      {
        "lang": "Javascript",
        "%": 2.5
      },
      {
        "lang": "HTML",
        "%": 2
      },
      {
        "lang": "CSS",
        "%": 2
      },
      {
        "lang": "Java",
        "%": 1.5
      },
      {
        "lang": "Python",
        "%": 1.5
      },
       ];
    
    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "%";
    pieSeries.dataFields.category = "lang";
    pieSeries.dataFields.description = "description";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    });
    
am4core.ready();