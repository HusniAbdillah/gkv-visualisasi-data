const pieTargetYear = 2023;  // Tahun yang ingin divisualisasikan

// Ambil data dari provinsi "INDONESIA" saja
const nasionalData = produksiData.find(
    d => d.tahun === pieTargetYear && d.provinsi === 'INDONESIA');

// Pastikan data nasional ditemukan
if (nasionalData) {
  const {komoditas, produksi} = nasionalData;

  // Hitung total produksi
  const totalProduksi = produksi.reduce((sum, value) => sum + value, 0);

  // Buat data dengan nama komoditas, produksi, dan persentase
  const dataKomoditas = komoditas.map((komoditas, index) => {
    const nilaiProduksi = produksi[index];
    const persentase = ((nilaiProduksi / totalProduksi) * 100)
                           .toFixed(2);  // Format ke 2 desimal
    return {komoditas, produksi: nilaiProduksi, persentase};
  });

  // Buat Pie Chart menggunakan Plotly
  Plotly.newPlot(
      'pieplot', [{
        labels: dataKomoditas.map(d => `${d.komoditas} (${d.persentase}%)`),
        values: dataKomoditas.map(d => d.produksi),
        type: 'pie'
      }],
      {title: `Proporsi Produksi Sayuran Nasional (${pieTargetYear})`});

  // Tampilkan data di konsol untuk referensi
  console.table(dataKomoditas);
} else {
  console.error('Data nasional untuk tahun ini tidak ditemukan.');
}