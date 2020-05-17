function hollowTriangle(angka) {
    if (!Number.isInteger(angka)) return console.log("harus berupa angka");
    if ((angka % 2)) return console.log("harus berupa angka ganjil");
    
    let circle = "   o   ";
    let spasi = "";
    let tandaX = "   x   ";
    for (let loop1 = angka; loop1 > 0; loop1--) {
        let jumlah = loop1 * 2 - 1;
        let tanda = "";
        spasi = spasi + "       "        
        for (let loop2 = 1; loop2 <= jumlah; loop2++) {
            if (loop1 === jumlah || angka === loop1) {
                tanda = tanda + circle
            } else {
                if (loop2 === jumlah || (jumlah - (jumlah - 1)) === loop2) {
                    tanda = tanda + circle
                } else {
                    tanda = tanda + tandaX
                }
            }
            
            if (loop2 === jumlah) {
                console.log(spasi + tanda)
            }
        }
    }


}
hollowTriangle(6)