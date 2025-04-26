const tahun = ['2019', '2020', '2021', '2022', '2023'];

const dataBawangMerah = [
  {
    x: tahun,
    y: [478.393, 484.669, 500.992, 478.393, 484.669].map(val => val * 1000),
    name: 'Jawa Timur',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [556.510, 479.091, 564.255, 556.510, 479.091].map(val => val * 1000),
    name: 'Jawa Tengah',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [201.155, 212.618, 222.620, 201.155, 212.618].map(val => val * 1000),
    name: 'Nusa Tenggara Barat',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [207.376, 233.917, 200.366, 207.376, 233.917].map(val => val * 1000),
    name: 'Sumatera Barat',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [101.762, 124.381, 183.210, 175.160, 201.421].map(val => val * 1000),
    name: 'Sulawesi Selatan',
    mode: 'lines+markers',
    type: 'scatter'
  }
];

const dataCabeRawit = [
  {
    x: tahun,
    y: [49.246, 61.160, 78.663, 87.012, 86.880].map(val => val * 1000),
    name: 'Sumatera Utara',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [28.656, 35.331, 29.175, 28.318, 20.523].map(val => val * 1000),
    name: 'Bali',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [12.796, 10.558, 10.921, 11.193, 14.070].map(val => val * 1000),
    name: 'Lampung',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [26.115, 24.052, 26.423, 23.761, 28.418].map(val => val * 1000),
    name: 'Sulawesi Selatan',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [31.782, 33.356, 35.118, 26.656, 25.081].map(val => val * 1000),
    name: 'Sumatera Barat',
    mode: 'lines+markers',
    type: 'scatter'
  }
];

const layoutBawangMerah = {
  title: '',
  xaxis: {title: 'Tahun'},
  yaxis: {
    title: 'Produksi (ton)',
    tickvals: [0, 100000, 200000, 300000, 400000, 500000, 600000],
    ticktext: ['0', '100k', '200k', '300k', '400k', '500k', '600k'],
    range: [0, 600000]
  },
  legend: {title: {text: 'Provinsi'}},
  margin: {l: 60, r: 30, b: 50, t: 20, pad: 4},
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  autosize: true,
  height: 550
};

const layoutCabeRawit = {
  title: '',
  xaxis: {title: 'Tahun'},
  yaxis: {
    title: 'Produksi (ton)',
    tickvals:
        [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000],
    ticktext:
        ['0', '10k', '20k', '30k', '40k', '50k', '60k', '70k', '80k', '90k'],
    range: [0, 90000]
  },
  legend: {title: {text: 'Provinsi'}},
  margin: {l: 60, r: 30, b: 50, t: 20, pad: 4},
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  autosize: true,
  height: 550
};

const config = {
  responsive: true,
  displayModeBar: true,
  modeBarButtonsToRemove: ['lasso2d', 'select2d'],
  displaylogo: false
};

function initializeLineCharts() {
  Plotly.newPlot(
      'linechart-bawang-merah', dataBawangMerah, layoutBawangMerah, config);
  Plotly.newPlot(
      'linechart-cabe-rawit', dataCabeRawit, layoutCabeRawit, config);
}

function updateLineChart() {
  const vegetableType = document.getElementById('vegetable-type').value;
  let title;

  if (vegetableType === 'cabe_rawit') {
    title = 'Tren Produksi Cabe Rawit per Provinsi di Indonesia (2019–2023)';
    document.getElementById('linechart-cabe-rawit').style.display = 'block';
    document.getElementById('linechart-bawang-merah').style.display = 'none';
  } else {
    title = 'Tren Produksi Bawang Merah per Provinsi di Indonesia (2019–2023)';
    document.getElementById('linechart-bawang-merah').style.display = 'block';
    document.getElementById('linechart-cabe-rawit').style.display = 'none';
  }

  document.getElementById('chart-title').innerText = title;
}