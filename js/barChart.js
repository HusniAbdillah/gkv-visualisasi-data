function updateBarChart() {
    const targetYear = 2023; // Tahun yang ditargetkan
    const targetKomoditas = ['Bawang Merah', 'Petai', 'Tomat']; // 3 jenis sayuran
    const targetProvinsi = ['JAWA TIMUR', 'JAWA TIMUR', 'JAWA BARAT', 'SUMATERA UTARA', 'SUMATERA BARAT']; // 5 provinsi
  
    // Filter data hanya untuk tahun, komoditas, dan provinsi yang relevan
    const filteredData = produksiData.filter(
      (d) =>
        d.tahun === targetYear &&
        targetProvinsi.includes(d.provinsi) &&
        d.komoditas.some((komoditas) => targetKomoditas.includes(komoditas))
    );
  
    // Kelompokkan data berdasarkan komoditas
    const groupedData = targetKomoditas.map((komoditas) => {
      const produksiPerProvinsi = targetProvinsi.map((provinsi) => {
        const record = filteredData.find(
          (d) =>
            d.provinsi === provinsi &&
            d.komoditas.includes(komoditas)
        );
        if (record) {
          const indexKomoditas = record.komoditas.indexOf(komoditas);
          return record.produksi[indexKomoditas];
        }
        return 0; // Jika tidak ada data, kembalikan 0
      });
  
      return {
        x: targetProvinsi,
        y: produksiPerProvinsi,
        name: komoditas,
        type: 'bar',
      };
    });
  
    // Layout untuk grouped bar chart
    const layout = {
      title: `Produksi 3 Komoditas Sayuran di 5 Provinsi (${targetYear})`,
      barmode: 'group', // Untuk membuat grouped bar chart
      xaxis: { title: 'Provinsi' },
      yaxis: { title: 'Produksi (Ton)' },
    };
  
    // Render grouped bar chart
    Plotly.newPlot('bar-chart', groupedData, layout);
  }