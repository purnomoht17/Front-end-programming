const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set EJS sebagai view engine
app.set("view engine", "ejs");

//membuat module path dengan jalur yang aman
app.use(express.static(path.join(__dirname, "views/public")));

// Halaman utama
app.get("/", (req, res) => {
  const nama = "Heru Purnomo"; 
  res.render("index", { nama });
});

// Halaman about
app.get("/about", (req, res) => {
    const message = "Ini adalah halaman About"; 
    res.render("about", { message });
});

// Halaman utama
app.get("/info", (req, res) => {
    const message = "Ini adalah halaman info"; 
    res.render("info", { message });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`)
});