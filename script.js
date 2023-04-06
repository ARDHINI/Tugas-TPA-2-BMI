function hitungBMI() {
    let berat = document.getElementById('berat').value;
    let tinggi = document.getElementById('tinggi').value;
    let hasil = Number(berat)/(Number(tinggi)/100)**2;
    console.log(hasil)

    document.getElementById('result-number').innerText = hasil.toFixed(1)

    if (hasil < 18.5) {
            document.getElementById('result-text').innerText = "Kurang"
    } else if (hasil <= 24.9) {
            document.getElementById('result-text').innerText = "Normal"
    } else if (hasil <= 29.9) {
            document.getElementById('result-text').innerText = "Berlebih"
    } else if (hasil > 29.9) {
            document.getElementById('result-text').innerText = "Obesitas"
    }
}