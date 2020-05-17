function cariPasangan(array) {
    // hapus spasi terus ngubah string ke array
    let toArray = array;
    // array untuk nampung karaketer yang dobel
    let checkDouble = [];
    // array untuk nampung karakter yang udah di cek
    let yangSudahDiCek = [];
    // looping untuk mendapatkan karakter yang duplikat
    for (let i = 0; i < toArray.length; i++) {
        let word = toArray[i];

        // ngecek apakah suatu karakter sudah pernah di cek dobel apa nggak
        // jika belum pernah atau -1 di akan lanjut jika tidak akan di pass
        if (yangSudahDiCek.indexOf(word) < 0) {
            // array untuk nampung suatu karakter yang dobel
            let collection = [];
            // disini dibuat looping satu lagi untuk membandingkan word dan word2 apakah sama
            // jika sama akan push karakter ke collection array
            for (let i2 = 0; i2 < toArray.length; i2++) {
                if (word === toArray[i2]) {
                    collection.push(toArray[i2])
                }
            }
            // jika ternyata karakter lebih dari satu atau dobel akan di push
            // ke array checkDouble 
            if (collection.length > 1) checkDouble.push(collection)   
            // terus karakter yang sudah pernah di cek di push ke array
            // yang sudah di cek 
            yangSudahDiCek.push(word)
        }
    }

    let output = checkDouble.map((value, index) => {
        let val = [];
        value.forEach((item2, index) => {
            if (index < 2) {
                val.push(item2)
            }
        });
        return val;
    })


    console.log(output.length + " Pasang:");
    console.log(...output);

}

cariPasangan([5,13,7,5,9,20,9,5,14])
