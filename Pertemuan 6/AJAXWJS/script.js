function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var output = '<ul>';
            data.forEach(function(mahasiswa) {
                output += '<li>' + mahasiswa.nama + ' - ' + mahasiswa.nim + ' - ' + mahasiswa.email + '</li>';
            });
            output += '</ul>';
            document.getElementById('hasil').innerHTML = output;
        } else {
            document.getElementById('hasil').innerHTML = 'Error saat mengambil data';
        }
    }
    xhr.send();
}