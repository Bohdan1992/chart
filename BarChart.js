function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы
    var chart = document.createElement("div");

    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
    chart.style.border = '2px solid black';
    
    // находим максимальное значение в массиве данных

    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) 
            max = data[i];
    }

    var scale = (width-40) / max ;
    var barWidth = Math.floor(height / data.length);

    // создаем отдельный элемент диаграммы
    for (var i = 0; i < data.length; i++) {

        var bar  = document.createElement("div");
        bar.id = 'div' + i;
        bar.className = 'mydiv' + i;
        var p    = document.createElement("p");
        p.id = 'p' + i;
        p.className = 'mydiv' + i;

        p.innerHTML = data[i];
        //p.style.display = "none";
        p.style.position = "absolute";
        p.style.left = data[i] * scale + 10 + "px";
        p.style.bottom = barWidth * i - 14 + "px";
        
        bar.style.width = data[i] * scale + "px" ;
        bar.style.height = barWidth - 4 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.left = "0px";
        bar.style.bottom = barWidth * i + "px";

        bar.style.backgroundColor = color;





        /* bar.onmouseover = function () {
            p.style.display = "none"
        }
        bar.onmouseout = function () {
            p.style.display = "block";
            p.style.position = "absolute";
            p.style.left = data[i] * scale + 10 + "px";
            p.style.bottom = barWidth * i - 14 + "px";
        }*/
       /* bar.onmouseover = function () {
            p.style.display = "block";
            p.style.position = "absolute";
            p.style.left = data[i] * scale + 5 + "px";
            p.style.bottom = barWidth * i + "px";
        }*/

        chart.appendChild(p);
        chart.appendChild(bar);

    }

    return chart;
}