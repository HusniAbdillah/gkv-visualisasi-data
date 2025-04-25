function updateBarChart() {
  const targetYear = 2023;
  const targetKomoditas = ['Bawang Merah', 'Cabai Rawit', 'Tomat'];

  let targetProvinsi = [];
  const checkboxes =
      document.querySelectorAll('.checkbox-item input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      targetProvinsi.push(checkbox.value);
    }
  });

  if (targetProvinsi.length > 7) {
    targetProvinsi = targetProvinsi.slice(0, 7);

    let count = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count++;
        if (count > 7) {
          checkbox.checked = false;
        }
      }
    });

    alert('Maksimal 7 provinsi yang dapat dipilih');
  }

  if (targetProvinsi.length === 0) {
    targetProvinsi = [
      'JAWA BARAT', 'JAWA TENGAH', 'JAWA TIMUR', 'SUMATERA UTARA',
      'SUMATERA BARAT'
    ];
    checkboxes.forEach(checkbox => {
      checkbox.checked = targetProvinsi.includes(checkbox.value);
    });
  }

  const filteredData = produksiData.filter(
      (d) => d.tahun === targetYear && targetProvinsi.includes(d.provinsi) &&
          d.komoditas.some((komoditas) => targetKomoditas.includes(komoditas)));

  const groupedData = targetKomoditas.map((komoditas) => {
    const produksiPerProvinsi = targetProvinsi.map((provinsi) => {
      const record = filteredData.find(
          (d) => d.provinsi === provinsi && d.komoditas.includes(komoditas));
      if (record) {
        const indexKomoditas = record.komoditas.indexOf(komoditas);
        return record.produksi[indexKomoditas];
      }
      return 0;
    });

    return {
      x: targetProvinsi,
      y: produksiPerProvinsi,
      name: komoditas,
      type: 'bar',
      marker: {line: {width: 1.5, color: '#ffffff'}}
    };
  });

  const title = `Produksi ${targetKomoditas.length} Komoditas Sayuran di ${
      targetProvinsi.length} Provinsi (${targetYear})`;
  document.getElementById('chart-title').innerText = title;

  const layout = {
    title: '',
    xaxis: {
      title: 'Provinsi',
      tickangle: -45,
      automargin: true,
      tickfont: {size: 10}
    },
    yaxis: {title: 'Produksi (Ton)', automargin: true},
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {family: 'Poppins, sans-serif', size: 12, color: '#263238'},
    margin: {l: 80, r: 40, b: 170, t: 20, pad: 4},
    legend: {
      font: {family: 'Poppins, sans-serif', size: 11, color: '#546E7A'},
      bgcolor: 'rgba(255,255,255,0.8)',
      bordercolor: '#ECEFF1',
      borderwidth: 1,
      orientation: 'h',
      y: -0.3
    },
    autosize: true,
    height: 550,
    bargap: 0.2,
    bargroupgap: 0.15
  };

  const config = {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: ['lasso2d', 'select2d'],
    displaylogo: false
  };

  Plotly.newPlot('bar-chart', groupedData, layout, config);
}