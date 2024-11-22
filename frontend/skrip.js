function calculateEfficiency() {
    // Ambil nilai input
    const innovationType = document.getElementById('innovationType').value;
    const production = parseInt(document.getElementById('production').value);

    // Validasi input
    if (!innovationType || !production) {
        document.getElementById('result').textContent = 'Mohon pilih jenis inovasi dan masukkan kapasitas produksi!';
        return;
    }

    let efficiency;

    // Proses perhitungan berdasarkan jenis inovasi
    switch (innovationType) {
        case 'automation':
            efficiency = production * 1.2; // Otomatisasi meningkatkan 20% efisiensi
            break;
        case 'renewable':
            efficiency = production * 1.15; // Energi terbarukan meningkatkan 15% efisiensi
            break;
        case 'waste':
            efficiency = production * 1.1; // Manajemen limbah meningkatkan 10% efisiensi
            break;
        default:
            efficiency = production;
            break;
    }

    // Tampilkan hasil perhitungan
    document.getElementById('result').textContent = Dengan inovasi ${innovationType}, efisiensi produksi Anda adalah ${efficiency.toFixed(2)} unit/hari.;
}