const tahun = ['2019', '2020', '2021', '2022', '2023'];
const dataBawangMerah = [
  {
    x: tahun,
    y: [478.393, 484.669, 500.992, 478.393, 484.669],
    name: 'Jawa Timur',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [556.510	, 479.091, 564.255, 556.510, 479.091],
    name: 'Jawa Tengah',
    mode: 'markers+lines',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [201.155, 212.618, 222.620, 201.155, 212.618],  
    name: 'Nusa Tenggara Barat',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [207.376, 233.917, 200.366, 207.376, 233.917],
    name: 'Sumatera Barat',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [101.762, 124.381, 183.210, 175.160, 201.421	],
    name: 'Sulawesi Selatan',
    mode: 'lines+markers',
    type: 'scatter'
  }
];
const dataCabeRawit = [
  {
    x: tahun,
    y: [49.246, 61.160, 78.663, 87.012, 86.880],
    name: 'Sumatera Utara',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [28.656, 35.331, 29.175, 28.318, 20.523],
    name: 'Bali',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [12.796, 10.558, 10.921, 11.193, 14.070],
    name: 'Lampung',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [26.115, 24.052, 26.423, 23.761, 28.418],
    name: 'Sulawesi Selatan',
    mode: 'lines+markers',
    type: 'scatter'
  },
  {
    x: tahun,
    y: [31.782, 33.356, 35.118, 26.656, 25.081],
    name: 'Sumatera Barat',
    mode: 'lines+markers',
    type: 'scatter'
  }
];
const layoutBawangMerah = {
  title: 'Tren Produksi Bawang Merah per Provinsi di Indonesia (2019–2023)',
  xaxis: { title: 'Tahun' },
  yaxis: { title: 'Produksi (ribu ton)' },
  legend: { title: { text: 'Provinsi' } }
};
const layoutCabeRawit = {
  title: 'Tren Produksi Cabe Rawit per Provinsi di Indonesia (2019–2023)',
  xaxis: { title: 'Tahun' },
  yaxis: { title: 'Produksi (ribu ton)' },
  legend: { title: { text: 'Provinsi' } }
};
const config = { responsive: true };
Plotly.newPlot('linechart-bawang-merah', dataBawangMerah, layoutBawangMerah, config);
Plotly.newPlot('linechart-cabe-rawit', dataCabeRawit, layoutCabeRawit, config);
