//ini draft
const lineTargetKomoditas = "Cabai Merah";
const provinsiList = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];

const lineData = provinsiList.map(prov => {
  const filtered = produksiData
    .filter(d => d.provinsi === prov && d.komoditas === lineTargetKomoditas)
    .sort((a, b) => a.tahun - b.tahun);

  return {
    x: filtered.map(d => d.tahun),
    y: filtered.map(d => d.produksi),
    mode: 'lines+markers',
    name: prov
  };
});

Plotly.newPlot("lineplot", lineData, {
  title: `Tren Produksi ${lineTargetKomoditas} (per Provinsi)`,
  xaxis: { title: "Tahun" },
  yaxis: { title: "Produksi (Ton)" }
});
