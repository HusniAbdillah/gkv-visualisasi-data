console.log('produksiData:', produksiData);
const pieTargetYear = 2023;

function renderPieChart(selectedProvince) {
  let dataKomoditas = [];
  let totalProduksi = 0;

  console.log('Selected Province:', selectedProvince);

  const htmlTitle = selectedProvince === 'national' ?
      `Distribusi Produksi 7 Sayuran Teratas di Indonesia (${pieTargetYear})` :
      `Distribusi Produksi 7 Sayuran Teratas di ${selectedProvince} (${
          pieTargetYear})`;

  document.getElementById('chart-title').innerText = htmlTitle;

  if (selectedProvince === 'national') {
    const nasionalData = produksiData.find(
        (d) => d.tahun === pieTargetYear && d.provinsi === 'INDONESIA');

    if (nasionalData) {
      const {komoditas, produksi} = nasionalData;

      totalProduksi = produksi.reduce((sum, value) => sum + value, 0);

      dataKomoditas = komoditas.map((komoditas, index) => {
        const nilaiProduksi = produksi[index];
        const persentase = ((nilaiProduksi / totalProduksi) * 100).toFixed(2);
        return {komoditas, produksi: nilaiProduksi, persentase};
      });

      dataKomoditas.sort((a, b) => b.produksi - a.produksi);

      dataKomoditas = dataKomoditas.slice(0, 7);
    } else {
      console.error('Data nasional untuk tahun ini tidak ditemukan.');
      return;
    }
  } else {
    const provinsiData = produksiData.find(
        (d) => d.tahun === pieTargetYear && d.provinsi === selectedProvince);

    if (provinsiData) {
      const {komoditas, produksi} = provinsiData;

      totalProduksi = produksi.reduce((sum, value) => sum + value, 0);

      dataKomoditas = komoditas.map((komoditas, index) => {
        const nilaiProduksi = produksi[index];
        const persentase = ((nilaiProduksi / totalProduksi) * 100).toFixed(2);
        return {komoditas, produksi: nilaiProduksi, persentase};
      });

      dataKomoditas.sort((a, b) => b.produksi - a.produksi);

      dataKomoditas = dataKomoditas.slice(0, 7);
    } else {
      console.error(`Data untuk provinsi ${selectedProvince} tidak ditemukan.`);
      return;
    }
  }

  Plotly.newPlot(
      'pie-chart',
      [
        {
          labels: dataKomoditas.map((d) => `${d.komoditas} (${d.persentase}%)`),
          values: dataKomoditas.map((d) => d.produksi),
          type: 'pie',
          textinfo: 'label+percent',
          hoverinfo: 'label+value+percent',
        },
      ],
      {
        title: '',
        margin: {l: 40, r: 40, b: 40, t: 20, pad: 4},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        height: 550
      },
      {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d'],
        displaylogo: false
      });

  console.table(dataKomoditas);
}