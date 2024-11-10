var classApp = angular.module('wheaterApp', []);

classApp.controller('wheaterCtrl', function($scope, $http) { // Injeksi $http
    var vm = $scope;
    vm.channelInfo = {
        heading: "Open Weather API",
        subheading: "Get your weather forecast",
        subheading2: {
            nama: "Irvan Lewenusa",
            npm: "19081010026",
            jurusan: "Teknik Informatika",
        }
    };

    $http.get('http://ip-api.com/json').then(function(response) {
        vm.lat = response.data.lat;
        vm.lon = response.data.lon;

        // Gunakan lat dan lon dari respons API IP
        var openWeatherMap = "https://api.openweathermap.org/data/2.5/weather?lat=" + vm.lat + "&lon=" + vm.lon + "&appid=613a26374e9150d98785f350ab648986&units=metric";

        $http.get(openWeatherMap).then(function(data) {
            // Mengambil data dari respons OpenWeatherMap
            vm.description = data.data.weather[0].description;
            vm.temp = data.data.main.temp + " °C"; // Tambahkan spasi sebelum C
            vm.wind = (data.data.wind.speed * 1.852).toFixed(2) + " KM/H"; // Konversi ke KM/H
            vm.kota = data.data.name; // Nama kota
            console.log(data); // Tampilkan data di konsol untuk debugging
        }).catch(function(error) {
            console.error("Error fetching weather data:", error); // Tangani kesalahan
        });
    }).catch(function(error) {
        console.error("Error fetching IP data:", error); // Tangani kesalahan untuk permintaan IP
    });
});
