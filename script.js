

function hesapla() {
  var degiskenTuru = document.getElementById("degiskenTuru").value;
  var bagimlilikDurumu = document.getElementById("bagimlilikDurumu").value;
  var olcumGrupSayisi = document.getElementById("olcumGrupSayisi").value;

  if (degiskenTuru == "nominal" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikiOlcum") {
    document.getElementById("sonucEkrani").value = "McNemar testi";
  } else if (degiskenTuru == "nominal" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikidenFazlaOlcum") {
    document.getElementById("sonucEkrani").value = "Cohran Q testi";
  } else if (degiskenTuru == "nominal" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikiGrup") {
    document.getElementById("sonucEkrani").value = "Ki-Kare (Chi-Square) testi";
  } else if (degiskenTuru == "nominal" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikidenFazlaGrup") {
    document.getElementById("sonucEkrani").value = "Ki-Kare (Chi-Square) testi";
  } else if (degiskenTuru == "ordinal" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikiOlcum") {
    document.getElementById("sonucEkrani").value = "Wilcoxon signed rank testi";
  } else if (degiskenTuru == "ordinal" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikidenFazlaOlcum") {
    document.getElementById("sonucEkrani").value = "Friedman testi";
  } else if (degiskenTuru == "ordinal" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikiGrup") {
    document.getElementById("sonucEkrani").value = "Mann-Whitney U testi";
  } else if (degiskenTuru == "ordinal" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikidenFazlaGrup") {
    document.getElementById("sonucEkrani").value = "Kruskal-Wallis testi";
  } else if (degiskenTuru == "normalDagilimYok" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikiOlcum") {
    document.getElementById("sonucEkrani").value = "Wilcoxon signed rank testi";
  } else if (degiskenTuru == "normalDagilimYok" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikidenFazlaOlcum") {
    document.getElementById("sonucEkrani").value = "Friedman testi";
  } else if (degiskenTuru == "normalDagilimYok" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikiGrup") {
    document.getElementById("sonucEkrani").value = "Mann-Whitney U testi";
  } else if (degiskenTuru == "normalDagilimYok" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikidenFazlaGrup") {
    document.getElementById("sonucEkrani").value = "Kruskal-Wallis testi";
  } else if (degiskenTuru == "normalDagilimVar" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikiOlcum") {
    document.getElementById("sonucEkrani").value = "Student’s-t paired testi";
  } else if (degiskenTuru == "normalDagilimVar" && bagimlilikDurumu == "bagimli" && olcumGrupSayisi == "ikidenFazlaOlcum") {
    document.getElementById("sonucEkrani").value = "Tekrarlı ölçümlerde tek yönlü varyans analizi (One-way repeated ANOVA)";
  } else if (degiskenTuru == "normalDagilimVar" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikiGrup") {
    document.getElementById("sonucEkrani").value = "Student’s-t independent testi";
  } else if (degiskenTuru == "normalDagilimVar" && bagimlilikDurumu == "bagimsiz" && olcumGrupSayisi == "ikidenFazlaGrup") {
    document.getElementById("sonucEkrani").value = "Bağımsız gruplarda tek yönlü varyans analizi (One-way ANOVA)";
  } else {
    document.getElementById("sonucEkrani").value = "Yanlış seçim yaptınız, tekrar gözden geçiriniz.";
  }
}

