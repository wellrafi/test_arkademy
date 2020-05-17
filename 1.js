function triangle(angka) {
    // ngecek kalo paramternya itu angka dan bukan bilangan negatif
    if (angka < 0 || !Number.isInteger(angka)) return console.log("Paramemeter harus angka dan positif!"); 
    // variabel kosong untuk nampung #
    let hashtag = "";
    for (let i = 0; i < angka; i++) {
        // menambahkan hastag setiap looping 
        hashtag = `${hashtag}#`;
        console.log(hashtag);
    }
    return
}
triangle(1)
triangle(5)
triangle("tiga")