function cek_kata(kata){
    // ngerubah kalimat ke array
    let count = kata.split(' ');
    // array buat nampun yang beneran string
    let beneranString = [];
    // looping untuk mendapatkan total kata dan 
    // total yang beneran string
    count.forEach(string => {
        // ngecek kalo hasil NaN berarti memang string
        // karena kalo string di parse ke integer pasti bakal return NaN
        if (isNaN(parseInt(string))) beneranString.push(string)
    });
    // menghitung total kata
    let total = count.length;
    // menghitung total kata yang string
    let totalString = beneranString.length

    // terus display ke console 
    console.log(`${totalString}/${total}`);
}
cek_kata("2 pasang sandal hilang")
cek_kata("ini adalah sebuah kata")
