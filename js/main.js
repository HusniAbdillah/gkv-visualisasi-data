function updateChart() {
  const chartType = document.getElementById('chart-type').value;
  document.getElementById('bar-chart').style.display =
      chartType === 'bar' ? 'block' : 'none';
  document.getElementById('line-chart').style.display =
      chartType === 'line' ? 'block' : 'none';
  document.getElementById('pie-chart').style.display =
      chartType === 'pie' ? 'block' : 'none';

  document.getElementById('line-selector').style.display =
      chartType === 'line' ? 'block' : 'none';
  document.getElementById('pie-selector').style.display =
      chartType === 'pie' ? 'block' : 'none';
  document.getElementById('bar-selector').style.display =
      chartType === 'bar' ? 'block' : 'none';

  if (chartType === 'pie') {
    updatePieChart();
  } else if (chartType === 'line') {
    updateLineChart();
  } else if (chartType === 'bar') {
    updateBarChart();
  }
}

function updateLineChart() {
  const vegetableType = document.getElementById('vegetable-type').value;
  let lineData, title;

  if (vegetableType === 'cabe_rawit') {
    lineData = dataCabeRawit;
    title = 'Tren Produksi Cabe Rawit per Provinsi di Indonesia (2019–2023)';
    document.getElementById('linechart-cabe-rawit').style.display = 'block';
    document.getElementById('linechart-bawang-merah').style.display = 'none';
  } else if (vegetableType === 'bawang_merah') {
    lineData = dataBawangMerah;
    title = 'Tren Produksi Bawang Merah per Provinsi di Indonesia (2019–2023)';
    document.getElementById('linechart-bawang-merah').style.display = 'block';
    document.getElementById('linechart-cabe-rawit').style.display = 'none';
  }

  document.getElementById('chart-title').innerText = title;

  const updatedLayout = {
    ...(vegetableType === 'cabe_rawit' ? layoutCabeRawit : layoutBawangMerah),
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {
      family: 'Poppins, sans-serif',
      size: 12,
      color: '#263238',
    },
    margin: {
      l: 60,
      r: 30,
      b: 80,
      t: 30,
      pad: 4,
    },
    legend: {
      font: {
        family: 'Poppins, sans-serif',
        size: 11,
        color: '#546E7A',
      },
      bgcolor: 'rgba(255,255,255,0.8)',
      bordercolor: '#ECEFF1',
      borderwidth: 1,
      orientation: 'h',
      y: -0.2,
    },
    xaxis: {
      tickfont: {
        family: 'Poppins, sans-serif',
        size: 11,
        color: '#546E7A',
      },
      gridcolor: '#ECEFF1',
    },
    yaxis: {
      tickfont: {
        family: 'Poppins, sans-serif',
        size: 11,
        color: '#546E7A',
      },
      gridcolor: '#ECEFF1',
      title: {
        text: 'Produksi (ton)',
        font: {
          family: 'Poppins, sans-serif',
          size: 12,
          color: '#263238',
        },
      },
    },
  };

  Plotly.newPlot(
      vegetableType === 'cabe_rawit' ? 'linechart-cabe-rawit' :
                                       'linechart-bawang-merah',
      lineData, updatedLayout, config);
}

function updatePieChart() {
  const selectedProvince = document.getElementById('province-select').value;

  const title = selectedProvince === 'national' ?
      'Distribusi Produksi Sayuran di Indonesia (2023)' :
      `Distribusi Produksi Sayuran di ${selectedProvince} (2023)`;

  document.getElementById('chart-title').innerText = title;

  renderPieChart(selectedProvince);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chart-type').value = 'line';
  document.getElementById('line-selector').style.display = 'block';
  document.getElementById('line-chart').style.display = 'block';
  document.getElementById('bar-chart').style.display = 'none';
  document.getElementById('pie-chart').style.display = 'none';

  updateLineChart();
});