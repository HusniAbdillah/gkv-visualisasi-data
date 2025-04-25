const produksiData = [
    {
        tahun: 2023,
        provinsi: 'ACEH',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            13673, 20, 1193, 9109, 8592, 417, 3055, 191, 12800, 97915,
            72920, 14431, 10538, 625, 14864, 2591, 7125, 4275, 31782,
            1, 10, 2273, 7982
        ]
    },
    {
        tahun: 2023,
        provinsi: 'SUMATERA UTARA',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            65585, 15, 17669, 139172, 228099, 57384, 77970, 145810, 31682, 217917,
            86880, 203868, 68593, 48328, 28573, 16330, 25017, 16895, 3701, 4,
            62, 25960, 9963
        ]
    },
    {
        tahun: 2023,
        provinsi: 'SUMATERA BARAT',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            233917, 588, 62073, 31602, 176081, 10296, 23403, 24951, 14833, 127451,
            25081, 100429, 97698, 41404, 18801, 22783, 9696, 6570, 3659, 0,
            57, 18904, 21295
        ]
    },
    {
        tahun: 2023,
        provinsi: 'RIAU',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            323, 0, 17, 0, 0, 5, 3062, 0, 8213, 9879,
            6607, 228, 7368, 26, 14149, 100, 13464, 10094, 1118, 2,
            209, 2762, 4753
        ]
    },
    {
        tahun: 2023,
        provinsi: 'JAMBI',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            18401, 527, 9422, 186038, 87286, 2949, 22733, 15163, 7941, 157856,
            16087, 40593, 21942, 6647, 5636, 11043, 6289, 5734, 2800, 8,
            128, 3048, 8077
        ]
    },
    {
        tahun: 2023,
        provinsi: 'SUMATERA SELATAN',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            1197, 50, 3022, 1424, 4920, 798, 4093, 1943, 6849, 15270,
            7766, 8781, 12364, 2949, 9485, 2721, 5752, 3043, 1419, 1,
            1315, 5591, 8207
        ]
    },
    {
        tahun: 2023,
        provinsi: 'INDONESIA',
        komoditas: [
            'Bawang Merah', 'Bawang Putih', 'Bawang Daun', 'Kentang', 'Kubis',
            'Kembang Kol', 'Petsai/Sawi', 'Wortel', 'Kacang Panjang', 'Cabai Besar',
            'Cabai Rawit', 'Tomat', 'Terung', 'Buncis', 'Ketimun', 'Labu Siam',
            'Kangkung', 'Bayam', 'Melinjo', 'Paprika', 'Jamur', 'Petai', 'Jengkol'
        ],
        produksi: [
            1985233, 39254, 639675, 1248513, 1399005, 175073, 686876, 668178, 309422, 1554498,
            1506762, 1143788, 699896, 305049, 416728, 453263, 322083, 170688, 224168, 20473,
            60826, 421141, 157157
        ]
    }
];