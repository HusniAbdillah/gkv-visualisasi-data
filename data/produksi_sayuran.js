const produksiData = [
  {
    tahun: 2023,
    provinsi: 'nan',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023,
      2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023
    ]
  },
  {
    tahun: 2023,
    provinsi: 'ACEH',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      13673, 20,    1193,  9109,  8592,  417,  3055,  191,
      12800, 97915, 72920, 14431, 10538, 625,  14864, 2591,
      7125,  4275,  31782, 1,     10,    2273, 7982
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SUMATERA UTARA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      65585, 15,     17669, 139172, 228099, 57384, 77970, 145810,
      31682, 217917, 86880, 203868, 68593,  48328, 28573, 16330,
      25017, 16895,  3701,  4,      62,     25960, 9963
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SUMATERA BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      233917, 588,    62073, 31602,  176081, 10296, 23403, 24951,
      14833,  127451, 25081, 100429, 97698,  41404, 18801, 22783,
      9696,   6570,   3659,  0,      57,     18904, 21295
    ]
  },
  {
    tahun: 2023,
    provinsi: 'RIAU',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      323,  0,  17,    0,   0,     5,     3062, 0, 8213, 9879, 6607, 228,
      7368, 26, 14149, 100, 13464, 10094, 1118, 2, 209,  2762, 4753
    ]
  },
  {
    tahun: 2023,
    provinsi: 'JAMBI',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      18401, 527,    9422,  186038, 87286, 2949, 22733, 15163,
      7941,  157856, 16087, 40593,  21942, 6647, 5636,  11043,
      6289,  5734,   2800,  8,      128,   3048, 8077
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SUMATERA SELATAN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      1197,  50,   3022, 1424, 4920, 798,  4093, 1943, 6849, 15270, 7766, 8781,
      12364, 2949, 9485, 2721, 5752, 3043, 1419, 1,    1315, 5591,  8207
    ]
  },
  {
    tahun: 2023,
    provinsi: 'BENGKULU',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      671,  15,    16360, 3291,  68428, 11828, 33101, 36213,
      8211, 55876, 22546, 36731, 78413, 29093, 17272, 13278,
      2798, 554,   402,   4,     1052,  2532,  5768
    ]
  },
  {
    tahun: 2023,
    provinsi: 'LAMPUNG',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      2193,  1,     3742,  183,   7828,  482,   11404, 7426,
      13366, 29018, 14070, 20678, 20441, 5594,  11527, 4421,
      13190, 7605,  13889, 21,    1862,  20375, 18836
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KEP. BANGKA BELITUNG',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      176,  0,    500,  0, 0,    0,    1359, 0, 3487, 7270, 5508, 2039,
      4255, 1127, 5968, 2, 1741, 1133, 287,  0, 12,   794,  764
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KEP. RIAU',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      17,  0,   211,  0, 0,    0,    2535, 0, 2808, 3429, 1245, 103,
      547, 163, 2953, 0, 4007, 3268, 88,   0, 58,   795,  927
    ]
  },
  {
    tahun: 2023,
    provinsi: 'DKI JAKARTA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      0,  0, 0, 0,   10,   11,   1951, 0, 0, 0,  1, 0,
      16, 0, 0, 116, 4155, 2639, 237,  0, 0, 18, 0
    ]
  },
  {
    tahun: 2023,
    provinsi: 'JAWA BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      179355, 208,    163136, 226420, 211440, 30968,  155108, 103972,
      66575,  324968, 163989, 268073, 98100,  78435,  125170, 133920,
      63200,  33062,  28142,  4660,   35888,  100801, 19763
    ]
  },
  {
    tahun: 2023,
    provinsi: 'JAWA TENGAH',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      479091, 29047,  125942, 248700, 188799, 32629,  108218, 149103,
      21906,  236921, 249208, 96537,  60500,  31596,  28017,  106741,
      30145,  11785,  52071,  23,     9400,   126226, 16794
    ]
  },
  {
    tahun: 2023,
    provinsi: 'DI YOGYAKARTA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      32953, 0,   244,  0,  35,   165,  4672,  0, 2426, 46622, 21384, 1104,
      3697,  248, 1622, 78, 5754, 3186, 25641, 0, 699,  8173,  154
    ]
  },
  {
    tahun: 2023,
    provinsi: 'JAWA TIMUR',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      484669, 1053,   121421, 278804, 202577, 18918, 75299, 77190,
      30074,  114653, 562816, 104092, 98756,  21886, 47564, 32350,
      30540,  13587,  17081,  15422,  7260,   70611, 1066
    ]
  },
  {
    tahun: 2023,
    provinsi: 'BANTEN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      860,  0,   270,  0,  52,    30,   6820,  164, 5558, 5130,  3227, 615,
      2862, 128, 7872, 48, 10508, 7797, 36016, 2,   130,  16070, 9303
    ]
  },
  {
    tahun: 2023,
    provinsi: 'BALI',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      35374, 167,  818,   240,  24729, 1428, 20610, 1675,
      4678,  7083, 20523, 5218, 1659,  5098, 5568,  53496,
      7447,  820,  319,   258,  355,   10,   0
    ]
  },
  {
    tahun: 2023,
    provinsi: 'NUSA TENGGARA BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      212618, 7057,  2330,  2201,  7633,  906,  2767, 4552,
      6712,   15945, 67963, 30573, 14371, 2838, 4181, 243,
      6664,   471,   648,   10,    818,   193,  1
    ]
  },
  {
    tahun: 2023,
    provinsi: 'NUSA TENGGARA TIMUR',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      11409, 346,  1635, 452,   2867,  739,  12628, 3003,
      5484,  3193, 9074, 11256, 12578, 4113, 4410,  19817,
      14020, 5465, 74,   13,    0,     327,  0
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KALIMANTAN BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      109,  0,    833,  0,  0,    37,   4036, 0, 6536, 3083, 8278, 2775,
      5739, 1228, 9043, 46, 4638, 3484, 1062, 0, 1,    5300, 12899
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KALIMANTAN TENGAH',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      72,   0,    1381, 0,  0,    45,   2478, 0, 4005, 999,  6969, 3167,
      5622, 1183, 5511, 22, 2079, 1163, 1458, 1, 376,  1851, 2511
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KALIMANTAN SELATAN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      483,  0,    756,  0, 1,    53,  963, 0, 3878, 8763, 13255, 5079,
      4874, 2111, 4010, 0, 1403, 983, 718, 0, 296,  3732, 2867
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KALIMANTAN TIMUR',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      252,  0,    676,   0,   4,    162,  7086, 0, 6747, 4830, 7470, 6929,
      9420, 4402, 10593, 185, 9394, 4743, 422,  0, 294,  917,  1117
    ]
  },
  {
    tahun: 2023,
    provinsi: 'KALIMANTAN UTARA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      351,  0,    2011, 0,    0,    0,    3004, 0, 3105, 6629, 6371, 10010,
      9439, 3038, 5231, 1368, 3938, 2057, 9,    0, 138,  329,  30
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SULAWESI UTARA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      3153, 0,    55928, 60217, 96121, 1425, 56468, 53534,
      1816, 8027, 17978, 59235, 8266,  1714, 2185,  16148,
      3896, 636,  185,   0,     0,     0,    0
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SULAWESI TENGAH',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      3228, 152,  8747, 810,  27611, 775,  8652, 7087, 2594, 9130, 21552, 13718,
      8486, 1288, 2707, 1713, 2500,  1297, 97,   28,   1,    222,  1748
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SULAWESI SELATAN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      201421, 1,     35061, 59594, 51060, 2355, 18500, 35987,
      8433,   16512, 28418, 64804, 11731, 4755, 8717,  10655,
      9573,   4456,  46,    6,     392,   2036, 1853
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SULAWESI TENGGARA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      491,  0,   570,  1,   255,  15,   1604, 0, 3667, 3449, 4529, 4355,
      4649, 621, 2373, 649, 3980, 2632, 251,  0, 14,   926,  409
    ]
  },
  {
    tahun: 2023,
    provinsi: 'GORONTALO',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      237, 0, 20,  0, 0,   1,  22, 0, 325, 1247, 15523, 5480,
      641, 8, 479, 0, 273, 47, 0,  0, 0,   5,    2
    ]
  },
  {
    tahun: 2023,
    provinsi: 'SULAWESI BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      1076, 8,  231,  30,  7,    0,    919, 2, 2725, 4025, 3710, 2609,
      2300, 14, 2130, 201, 1988, 1865, 0,   0, 0,    12,   3
    ]
  },
  {
    tahun: 2023,
    provinsi: 'MALUKU',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      607,  0,   427,  26,  389,  63,   2845, 23, 2337, 1862, 4531, 3614,
      3396, 888, 2786, 287, 3304, 2079, 113,  9,  0,    64,   12
    ]
  },
  {
    tahun: 2023,
    provinsi: 'MALUKU UTARA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      611,  0,   1058, 0,   11,   4,   1240, 0, 4157, 5420, 3717, 8580,
      5501, 400, 2539, 536, 2757, 831, 356,  0, 0,    3,    0
    ]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA BARAT',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      343,  0,    470,  173, 357,  34,   1859, 144, 1783, 1316, 3010, 3642,
      2157, 1799, 2469, 725, 3645, 2397, 33,   0,   0,    196,  6
    ]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA BARAT DAYA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi:
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      317,  1,    1501, 28,  3811, 149,  6412, 47, 3709, 2811, 4556, 4440,
      2980, 1302, 2324, 650, 7204, 4038, 44,   0,  0,    85,   47
    ]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA SELATAN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi:
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA TENGAH',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi:
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    tahun: 2023,
    provinsi: 'PAPUA PEGUNUNGAN',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi:
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    tahun: 2023,
    provinsi: 'INDONESIA',
    komoditas: [
      'Bawang Merah',   'Bawang Putih', 'Bawang Daun', 'Kentang',
      'Kubis',          'Kembang Kol',  'Petsai/Sawi', 'Wortel',
      'Kacang Panjang', 'Cabai Besar',  'Cabai Rawit', 'Tomat',
      'Terung',         'Buncis',       'Ketimun',     'Labu Siam',
      'Kangkung',       'Bayam',        'Melinjo',     'Paprika',
      'Jamur',          'Petai',        'Jengkol'
    ],
    produksi: [
      1985233, 39254,   639675,  1248513, 1399005, 175073, 686876, 668178,
      309422,  1554498, 1506762, 1143788, 699896,  305049, 416728, 453263,
      322083,  170688,  224168,  20473,   60826,   421141, 157157
    ]
  }
];
