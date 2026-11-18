function cariAngkaTerbesar(daftarAngka) {
  // 1. Jadikan angka pertama sebagai yang terbesar sementara
  let terbesarSementara = daftarAngka[0]; 

  // 2. Periksa angka kedua dan seterusnya
  for (let i = 1; i < daftarAngka.length; i++) {
    // 3. Bandingkan dan perbarui jika menemukan yang lebih besar
    if (daftarAngka[i] > terbesarSementara) {
      terbesarSementara = daftarAngka[i]; 
    }
  }

  // 4. Kembalikan hasil akhir
  return terbesarSementara;
}

const angka = [10, 5, 24, 8, 12];
console.log(cariAngkaTerbesar(angka)); // Output: 24



const jadikanHurufBesar = (teks) => teks.toUpperCase();

// Cara memanggil fungsinya:
let hasil = jadikanHurufBesar("halo dunia");
console.log(hasil); // Output: HALO DUNIA
