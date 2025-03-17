function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66vpaKbHhVs":
        Script1();
        break;
  }
}

function Script1()
{
  // Ambil data dari Storyline
var player = GetPlayer();
var berat = player.GetVar("berat");
var tinggi = player.GetVar("tinggi");

// Cek apakah tinggi lebih dari 0 untuk menghindari pembagian dengan nol
if (tinggi > 0) {
    // Hitung IMT
    var imt = berat / (tinggi * tinggi);
    // Bulatkan hasil ke dua angka di belakang koma
    imt = Math.round(imt * 100) / 100;
    // Set hasil ke variable di Storyline
    player.SetVar("hasilIMT", imt);

    // Tentukan kategori IMT
    var kategori = "";
    if (imt < 18.5) {
        kategori = "Berat badan kurang";
    } else if (imt >= 18.5 && imt <= 24.9) {
        kategori = "Berat badan normal";
    } else if (imt >= 25 && imt <= 29.9) {
        kategori = "Berat badan berlebih";
    } else if (imt >= 30 && imt <= 34.9) {
        kategori = "Obesitas tingkat 1";
    } else if (imt >= 35 && imt <= 39.9) {
        kategori = "Obesitas tingkat 2";
    } else {
        kategori = "Obesitas tingkat 3";
    }

    // Set kategori ke variable di Storyline
    player.SetVar("kategoriIMT", kategori);
} else {
    // Jika tinggi tidak valid, set hasil ke 0 dan kategori ke kosong
    player.SetVar("hasilIMT", 0);
    player.SetVar("kategoriIMT", "Tinggi badan tidak valid");
}

}

