function filterVegetablesByCategory() {
  const selectedCategory = document.getElementById('vegetable-category').value;
  const checkboxItems = document.querySelectorAll('.vegetable-checkbox-item');

  if (selectedCategory === 'all') {
    checkboxItems.forEach(item => {
      item.style.display = 'flex';
    });
  } else {
    checkboxItems.forEach(item => {
      if (item.classList.contains(selectedCategory)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

function filterProvincesByRegion() {
  const selectedRegion = document.getElementById('region-filter').value;
  const checkboxItems = document.querySelectorAll('.checkbox-item');

  if (selectedRegion === 'all') {
    checkboxItems.forEach(item => {
      item.style.display = 'flex';
    });
  } else {
    checkboxItems.forEach(item => {
      if (item.classList.contains(selectedRegion)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

function selectAllVegetables() {
  const selectedCategory = document.getElementById('vegetable-category').value;
  const checkboxItems = document.querySelectorAll('.vegetable-checkbox-item');
  let visibleItems = [];

  checkboxItems.forEach(item => {
    if ((selectedCategory === 'all' ||
         item.classList.contains(selectedCategory)) &&
        item.style.display !== 'none') {
      const checkbox = item.querySelector('input[type="checkbox"]');
      visibleItems.push(checkbox);
    }
  });

  const itemsToSelect = visibleItems.slice(0, 3);

  checkboxItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
  });

  itemsToSelect.forEach(checkbox => {
    checkbox.checked = true;
  });

  updateBarChart();
}

function selectAll() {
  const selectedRegion = document.getElementById('region-filter').value;
  const checkboxItems = document.querySelectorAll('.checkbox-item');

  checkboxItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');

    if (selectedRegion === 'all' || item.classList.contains(selectedRegion)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });

  updateSelectedProvincesInfo();
  updateBarChart();
}

function clearVegetableSelection() {
  const checkboxes = document.querySelectorAll(
      '.vegetable-checkbox-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  updateSelectedVegetablesInfo();
  updateBarChart();
}

function clearSelection() {
  const checkboxes =
      document.querySelectorAll('.checkbox-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  updateSelectedProvincesInfo();
  updateBarChart();
}

function setDefaultProvinces() {
  const defaultProvinces = [
    'JAWA BARAT', 'JAWA TENGAH', 'JAWA TIMUR', 'SUMATERA UTARA',
    'SUMATERA BARAT'
  ];

  const checkboxes =
      document.querySelectorAll('.checkbox-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = defaultProvinces.includes(checkbox.value);
  });

  updateSelectedProvincesInfo();
  updateBarChart();
}

function setDefaultVegetables() {
  const defaultVegetables = ['Bawang Merah', 'Cabai Rawit', 'Tomat'];

  const checkboxes = document.querySelectorAll(
      '.vegetable-checkbox-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = defaultVegetables.includes(checkbox.value);
  });

  updateSelectedVegetablesInfo();
  updateBarChart();
}

function updateSelectedVegetablesInfo() {
  const checkedBoxes = document.querySelectorAll(
      '.vegetable-checkbox-item input[type="checkbox"]:checked');
  const selectedVegetablesInfo =
      document.getElementById('selected-vegetables-info');

  if (selectedVegetablesInfo) {
    selectedVegetablesInfo.innerHTML =
        `<span>${checkedBoxes.length}</span> dari 3 sayuran dipilih`;
  }

  document.querySelectorAll('.vegetable-checkbox-item').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}

function updateBarChart() {
  const targetYear = 2023;

  let targetKomoditas = [];
  const vegetableCheckboxes = document.querySelectorAll(
      '.vegetable-checkbox-item input[type="checkbox"]');

  vegetableCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      targetKomoditas.push(checkbox.value);
    }
  });

  updateSelectedVegetablesInfo();

  if (targetKomoditas.length > 3) {
    targetKomoditas = targetKomoditas.slice(0, 3);

    let count = 0;
    vegetableCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count++;
        if (count > 3) {
          checkbox.checked = false;
        }
      }
    });

    alert('Maksimal 3 jenis sayuran yang dapat dipilih');
    updateSelectedVegetablesInfo();
  }

  let targetProvinsi = [];
  const provinceCheckboxes =
      document.querySelectorAll('.checkbox-item input[type="checkbox"]');

  provinceCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      targetProvinsi.push(checkbox.value);
    }
  });

  updateSelectedProvincesInfo();

  if (targetKomoditas.length === 0 || targetProvinsi.length === 0) {
    document.getElementById('bar-chart').innerHTML =
        '<div class="no-data-message">Silahkan pilih provinsi dan jenis sayuran untuk menampilkan data</div>';
    document.getElementById('chart-title').innerText =
        'Tidak ada data yang dipilih';
    return;
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

function updateSelectedProvincesInfo() {
  const checkedBoxes = document.querySelectorAll(
      '.checkbox-item input[type="checkbox"]:checked');
  const selectedProvincesInfo =
      document.getElementById('selected-provinces-info');

  if (selectedProvincesInfo) {
    selectedProvincesInfo.innerHTML =
        `<span>${checkedBoxes.length}</span> provinsi dipilih`;
  }

  document.querySelectorAll('.checkbox-item').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}

const styleElement = document.createElement('style');
styleElement.textContent = `
  .default-button {
    background-color: #FF9800;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    transition: all 0.2s ease;
  }
  
  .default-button:hover {
    background-color: #F57C00;
  }
`;
document.head.appendChild(styleElement);