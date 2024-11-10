const http = require('http');
const fs = require('fs');
const path = require('path');

// Untuk Membuat server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Menampilkan file HTML
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.method === 'POST' && req.url === '/submit') {
        //Untuk  Mengambil data dari form
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            // Parse data form menjadi objek key-value
            const dataObj = new URLSearchParams(body);
            const nama = dataObj.get('nama');
            const nim = dataObj.get('nim');
            const fakultas = dataObj.get('fakultas');

            // Data yang akan disimpan
            const dataToSave = `{\n Nama: ${nama}\n NIM: ${nim}\n Fakultas: ${fakultas}\n}\n`;

            // Menyimpan data ke dalam file 'biodata.txt'
            const filePath = path.join(__dirname, 'biodata.txt');
            fs.appendFile(filePath, dataToSave, (err) => {
                if (err) {
                    console.error('Error saat menyimpan data:', err);
                    res.writeHead(500);
                    res.end('Error saat menyimpan data');
                    return;
                }

                // Menampilkan pesan sukses dan tombol "Back"
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h2>Terima kasih, data Anda telah disimpan!</h2>');
                res.write('<button onclick="window.location.href=\'/\'">Kembali ke Form</button>');
                res.end();
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2>Halaman tidak ditemukan</h2>');
    }
});

// Menjalankan server pada port 3000
server.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});

