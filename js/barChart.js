const barTargetYear = 2023;
const topKomoditas = ['Bawang Merah', 'Bawang Putih', 'Tomat'];
const targetProvinsi = [
  'ACEH', 'JAWA TIMUR', 'JAWA BARAT', 'SUMATERA UTARA', 'SUMATERA BARAT'
];

// Filter data hanya untuk tahun dan komoditas serta provinsi yang relevan
const barDataFiltered = produksiData.filter(
    d => d.tahun === barTargetYear && topKomoditas.includes(d.komoditas) &&
        targetProvinsi.includes(d.provinsi));

// Kelompokkan data berdasarkan komoditas
const groupedData = topKomoditas.map(komoditas => {
  const dataKomoditas = targetProvinsi.map(prov => {
    const record = barDataFiltered.find(
        d => d.komoditas === komoditas && d.provinsi === prov);
    return record ? record.produksi : 0;
  });

  return {x: targetProvinsi, y: dataKomoditas, name: komoditas, type: 'bar'};
});

// Plot grouped bar chart
Plotly.newPlot('barplot', groupedData, {
  title: `Produksi Tiga Komoditas Sayur Tertinggi di 5 Provinsi (${
      barTargetYear})`,
  barmode: 'group',
  xaxis: {title: 'Provinsi'},
  yaxis: {title: 'Produksi (Ton)'}
});
