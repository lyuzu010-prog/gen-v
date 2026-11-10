function cekAngka(angka) {
    if (angka > 0) {
        console.log(angka + " adalah bilangan positif");
    } else if (angka < 0) {
        console.log(angka + " adalah bilangan negatif");
    } else {
        console.log("Angka tersebut adalah nol");
    }
}

// Uji coba memanggil fungsi dengan berbagai angka
cekAngka(15);  // Output: 15 adalah bilangan positif
cekAngka(-7);  // Output: -7 adalah bilangan negatif
cekAngka(0);   // Output: Angka tersebut adalah nol
VM47:3 15 adalah bilangan positif
VM47:5 -7 adalah bilangan negatif
VM47:7 Angka tersebut adalah nol
undefined
