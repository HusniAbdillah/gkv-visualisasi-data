//ini draft
const barTargetYear = 2020;
const barTargetKomoditas = "Cabai Merah";

const barData = produksiData.filter(
  d => d.tahun === barTargetYear && d.komoditas === barTargetKomoditas
);

const barX = barData.map(d => d.provinsi);
const barY = barData.map(d => d.produksi);

Plotly.newPlot("barplot", [{
  x: barX,
  y: barY,
  type: 'bar'
}], {
  title: `Produksi ${barTargetKomoditas} di Tiap Provinsi (${barTargetYear})`,
  xaxis: { title: "Provinsi" },
  yaxis: { title: "Produksi (Ton)" }
});
