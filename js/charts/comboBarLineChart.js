function drawComboChart(data, canvasElement) {

    console.log(data.date);
    console.log(data.values);

    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    const comboChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.date,
            datasets: data.values
        },
        options: {
            scales: {
                yAxes: [{
                ticks: {
                    beginAtZero: true
                }
                }]
            },
            onClick: (e) => {

                console.log("Click on the chart")

                const activeElement = comboChart.getElementAtEvent(e)[0];
                if (activeElement) {
                    const datasetIndex = activeElement._datasetIndex;
                    const index = activeElement._index;
                    const value = comboChart.data.datasets[datasetIndex].data[index];
                    const xValue = comboChart.data.labels[index];
                    const label = comboChart.data.datasets[datasetIndex].label;
                    const id = comboChart.data.datasets[datasetIndex].id;
                    console.log(label);
                    console.log(xValue);
                    console.log(value);

                    if(id == "rainDay"){
                        console.log("Draw the rainfall lineChart of the day by 3 hours");
                    }
                }

            
                /*
                types.get("TmpRain").forEach(element => {
                    //check the box corresponding to the clicked bar
                    //call checkparameters
                });


                */
            }
        }
    });
    return comboChart;
}

function updateComboChart(comboChart, type) {
    //comboChart.data.labels = data.date;
    //comboChart.data.datasets = data.value;
 
    //for each element in type array
    // set hiden to false
    // else set hiden to true
    comboChart.data.datasets.forEach((dataset) => {
        if(type.includes(dataset.id)) {
            dataset.hidden = false;
        } else {
            dataset.hidden = true;
        }
    });
    comboChart.update();
    console.log("updateComboChart");
}