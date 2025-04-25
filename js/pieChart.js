const pieTargetYear = 2023; // Tahun yang ingin divisualisasikan
const pieTargetProvinsi = ['SUMATERA UTARA', 'JAWA BARAT', 'JAWA TENGAH', 'SULAWESI SELATAN', 'NUSA TENGGARA BARAT'];

// Fungsi untuk membuat Pie Chart
function renderPieChart(selectedProvince) {
  let dataKomoditas = [];
  let totalProduksi = 0;

  if (selectedProvince === "national") {
    // Ambil data nasional
    const nasionalData = produksiData.find(
      d => d.tahun === pieTargetYear && d.provinsi === 'INDONESIA'
    );

    // Pastikan data nasional ditemukan
    if (nasionalData) {
      const { komoditas, produksi } = nasionalData;

      // Hitung total produksi
      totalProduksi = produksi.reduce((sum, value) => sum + value, 0);

      // Buat data dengan nama komoditas, produksi, dan persentase
      dataKomoditas = komoditas.map((komoditas, index) => {
        const nilaiProduksi = produksi[index];
        const persentase = ((nilaiProduksi / totalProduksi) * 100).toFixed(2); // Format ke 2 desimal
        return { komoditas, produksi: nilaiProduksi, persentase };
      });
    } else {
      console.error('Data nasional untuk tahun ini tidak ditemukan.');
      return;
    }
  } else if (pieTargetProvinsi.includes(selectedProvince)) {
    // Ambil data untuk provinsi yang dipilih
    const provinsiData = produksiData.find(
      d => d.tahun === pieTargetYear && d.provinsi === selectedProvince
    );

    // Pastikan data provinsi ditemukan
    if (provinsiData) {
      const { komoditas, produksi } = provinsiData;

      // Hitung total produksi
      totalProduksi = produksi.reduce((sum, value) => sum + value, 0);

      // Buat data dengan nama komoditas, produksi, dan persentase
      dataKomoditas = komoditas.map((komoditas, index) => {
        const nilaiProduksi = produksi[index];
        const persentase = ((nilaiProduksi / totalProduksi) * 100).toFixed(2); // Format ke 2 desimal
        return { komoditas, produksi: nilaiProduksi, persentase };
      });
    } else {
      console.error(`Data untuk provinsi ${selectedProvince} tidak ditemukan.`);
      return;
    }
  } else {
    console.error('Provinsi yang dipilih tidak valid.');
    return;
  }

  // Buat Pie Chart menggunakan Plotly
  Plotly.newPlot(
    'pie-chart', [{
      labels: dataKomoditas.map(d => `${d.komoditas} (${d.persentase}%)`),
      values: dataKomoditas.map(d => d.produksi),
      type: 'pie'
    }],
    { title: `Proporsi Produksi Sayuran ${selectedProvince === "national" ? "Nasional" : selectedProvince} (${pieTargetYear})` }
  );

  // Tampilkan data di konsol untuk referensi
  console.table(dataKomoditas);
}