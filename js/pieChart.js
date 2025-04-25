const pieTargetYear = 2023; // Tahun yang ingin divisualisasikan
const pieData = produksiData.filter(d => d.tahun === pieTargetYear && d.provinsi !== 'INDONESIA'); // Eksklusikan "INDONESIA"

// Menggabungkan semua data produksi dari seluruh provinsi
const komoditasUnik = [...new Set(pieData.flatMap(d => d.komoditas))];

// Hitung total produksi per komoditas
const totalPerKomoditas = komoditasUnik.map(komoditas => {
  let total = 0;
  pieData.forEach(provinsi => {
    const indexKomoditas = provinsi.komoditas.indexOf(komoditas);
    if (indexKomoditas !== -1) {
      total += provinsi.produksi[indexKomoditas];
    }
  });
  return { komoditas, total };
});

// Buat Pie Chart menggunakan Plotly
Plotly.newPlot("pieplot", [{
  labels: totalPerKomoditas.map(d => d.komoditas),
  values: totalPerKomoditas.map(d => d.total),
  type: 'pie'
}], {
  title: `Proporsi Produksi Sayuran Nasional (${pieTargetYear})`
});