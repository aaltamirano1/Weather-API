var classApp= angular.module('weatherApp',[]);

classApp.controller('weatherCtrl',function($scope, $http){
  var vm= $scope;
  vm.channelInfo={
    heading: "What's the Weather?",
    footer1: {name: 'Angel Altamirano', link:'https://aaltamirano1.github.io/Portfolio/'},
    footer2: {name: 'Special thanks to Dylan', link:'https://www.youtube.com/user/pizzapokerguy87'}
    };

  $http.get("https://cors-anywhere.herokuapp.com/http://ip-api.com/json").success(function(data){
    vm.lat=data.lat;
    vm.lon=data.lon;
    var apiKey= "014f150ca852e9ea36fffb5e506c4616";
    var openWeatherUrl="http://api.openweathermap.org/data/2.5/weather?lat=" +vm.lat+ "&lon=" +vm.lon+ "&appid=" +apiKey;

    $http.get(openWeatherUrl).success(function(data){
      vm.description= data.weather[0].description;
      vm.speed=(2.237*data.wind.speed).toFixed(1)+' mph';//converts knots to mph sets to 1 decimal
      vm.name= data.name;
      vm.temp=data.main.temp;
      vm.fTemp=(9/5*(vm.temp - 273) + 32).toFixed(1)+' (°F)';
      vm.cTemp=(vm.temp-273).toFixed(1)+' (°C)';
      vm.icon="http://openweathermap.org/img/w/" +data.weather[0].icon+ ".png";

      switch(vm.description){
        case 'clear sky':
          {vm.weatherBackground={
            "background": "url('http://wallpaper-gallery.net/images/tree-wallpaper-hd/tree-wallpaper-hd-4.jpg')",
            "background-size": "cover"};
           break;}

        case 'scattered clouds':
          {vm.weatherBackground={
            "background": "url('http://wallpapercave.com/wp/4QyIoZO.jpg')",
            "background-size": "cover"};
           break;}

        case 'broken clouds':
          {vm.weatherBackground={
            "background": "url('https://i.ytimg.com/vi/z2UDZMu2GLU/maxresdefault.jpg')",
            "background-size": "cover"};
           break;}

        case 'few clouds':
          {vm.weatherBackground={
            "background": "url('http://bgfons.com/upload/clouds_texture2887.jpg')",
            "background-size": "cover"};
           break;}

        case 'mist':
          {vm.weatherBackground={
            "background": "url('http://eskipaper.com/images/foggy-6.jpg')",
            "background-size": "cover"};
           break;}

        case 'rain':
          {vm.weatherBackground={
            "background": "url('http://belajoo.com/i/2017/01/rain-sad-wallpaper-hd.jpg')",
            "background-size": "cover"};
           break;}

        case 'light rain':
          {vm.weatherBackground={
            "background": "url('https://www.redwigwam.com/wp-content/uploads/bfi_thumb/4289314509_b7e07267ef_b-1024x640-ml9egkvz2lwfea1ksumza5duejb6hpm2mplzvfwjda.jpg')",
            "background-size": "cover"};
           break;}


        case 'shower rain':
          {vm.weatherBackground={
            "background": "url('http://wallpapercave.com/wp/doNuhh5.jpg')",
            "background-size": "cover"};
           break;}

        case 'snow':
          {vm.weatherBackground={
            "background": "url('https://www.walldevil.com/wallpapers/a87/blue-dark-wallpaper-environment-snowflakes-abstract.jpg')",
            "background-size": "cover"};
           break;}

        case 'thunder storm':
          {vm.weatherBackground={
            "background": "url('http://wallpapercave.com/wp/8M5Odq4.jpg')",
            "background-size": "cover"};
           break;}

        default:
          {vm.weatherBackground={
            "background": "url('https://s-media-cache-ak0.pinimg.com/originals/b3/8f/02/b38f02110a56065fba21c350c356b46e.jpg')",
            "background-size": "cover"};
           break;}
        }
    });//end get(openWeatherUrl)

  });// end get("http://ip-api.com/json")

});//end controller
