//ini draft
const pieTargetYear = 2020;
const pieData = produksiData.filter(d => d.tahun === pieTargetYear);

const komoditasUnik = [...new Set(pieData.map(d => d.komoditas))];
const totalPerKomoditas = komoditasUnik.map(k => {
  const total = pieData
    .filter(d => d.komoditas === k)
    .reduce((sum, cur) => sum + cur.produksi, 0);
  return { komoditas: k, total };
});

Plotly.newPlot("pieplot", [{
  labels: totalPerKomoditas.map(d => d.komoditas),
  values: totalPerKomoditas.map(d => d.total),
  type: 'pie'
}], {
  title: `Proporsi Produksi Sayuran Nasional (${pieTargetYear})`
});
