// dummy
Plotly.newPlot(
    'mapplot', [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: ['Indonesia'],
      z: [1],
      text: ['Indonesia'],
      colorscale: 'Viridis'
    }],
    {
      title: 'Peta Produksi (placeholder)',
      geo: {scope: 'asia', showlakes: true}
    });
