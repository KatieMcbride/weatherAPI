$(document).ready(function(event){
    // variables
    var pastSearches = [];
    
    /* db */
    // Get Date
    checkTime();

    function checkTime() {
      let currentDate = moment().format('MMM Do YYYY');
      $('.date').text(`Today is: ${currentDate}`);
    };
    /* raw weather object from api */
    // /* variables */

    
    

    /* parsed weather object */

    /* utility functions */
    /* parse raw data */
    /* render parsed data */

    /* event functions */
    
    /* search button click */
    $('#citySearchBtn').on('click', function(){
        /* get city name  */
        var city = $('#citySearch').val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=1fbaf845db1ffb968efccccfdbaa9c39";
        $.ajax({
            url: queryURL,
            method: 'GET'
             /* get raw data */
        }).then(function(response){
            console.log(response);
            /*parse data*/

            // City
            $(".city").text("City:" + response.city.name);

            // Temperature
            var k = response.list[0].main.temp;
            var f = Math.round((k-273.15)*1.8+32);
            console.log(f);
            $('.temperature').text(f);

            //Humidity
            $(".humidity").text(response.list[0].main.humidity);

            //Wind Speed
            $(".windSpeed").text(response.list[0].wind.speed);


            var mainWeather = response.list[0].weather[0].main;
            if(mainWeather === "Clear"){
                $("#mainWeatherIcon").addClass("fas fa-sun fa-10x"); 
            } if(mainWeather === "Clouds") {
                $("#mainWeatherIcon").addClass("fas fa-cloud fa-10x");
            } if (mainWeather === "Rain"){
                $("#mainWeatherIcon").addClass("fas fa-cloud-rain fa-10x");
            } if (mainWeather === "Snow"){
                $("#mainWeatherIcon").addClass("fas fa-snowflake fa-10x");
            } if (mainWeather === "Thunderstorm"){
                $("#mainWeatherIcon").addClass("fas fa-cloud-showers-heavy fa-10x");
            } if (mainWeather === "Drizzle"){
                $("#mainWeatherIcon").addClass("fas fa-cloud-rain fa-10x");
            } 

            fiveDayForecast()
            localStore()
        })
    });

    function fiveDayForecast(){
        var city = $('#citySearch').val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=1fbaf845db1ffb968efccccfdbaa9c39";
        $.ajax({
            url: queryURL,
            method: 'GET'
             /* get raw data */
        }).then(function(response){
            console.log(response);
            /*parse data*/
        

        // Temperature and Humidity Day 1
        var k = response.list[0].main.temp;
        var f = Math.round((k-273.15)*1.8+32);
        console.log(f);
        $('.dayOneTemp').text(f);

        $(".dayOneHum").text(response.list[0].main.humidity);
       
        var weatherOne = response.list[0].weather[0].main;
        if(weatherOne === "Clear"){
            $("#weatherOne").addClass("fas fa-sun");  
        } if (weatherOne === "Clouds"){
            $("#weatherOne").addClass("fas fa-cloud");
        } if (weatherOne === "Rain"){
            $("#weatherOne").addClass("fas fa-cloud-rain");
        } if (weatherOne === "Snow"){
            $("#weatherOne").addClass("fas fa-snowflake");
        } if (weatherOne === "Thunderstorm"){
            $("#weatherOne").addClass("fas fa-cloud-showers-heavy");
        } if (weatherOne === "Drizzle"){
            $("#weatherOne").addClass("fas fa-cloud-rain");
        }    
    

        // Temperature and Humidity Day 2
        var kA = response.list[1].main.temp;
        var fA = Math.round((kA-273.15)*1.8+32);
        console.log(fA);
        $('.dayTwoTemp').text(fA);

        $('.dayTwoHum').text(response.list[1].main.humidity);

        var weatherTwo = response.list[1].weather[0].main;
        if(weatherTwo === "Clear"){
            $("#weatherTwo").addClass("fas fa-sun"); 
        } if(weatherTwo === "Clouds") {
            $("#weatherTwo").addClass("fas fa-cloud");
        } if (weatherTwo === "Rain"){
            $("#weatherTwo").addClass("fas fa-cloud-rain");
        } if (weatherTwo === "Snow"){
            $("#weatherTwo").addClass("fas fa-snowflake");
        } if (weatherTwo === "Thunderstorm"){
            $("#weatherTwo").addClass("fas fa-cloud-showers-heavy");
        } if (weatherTwo === "Drizzle"){
            $("#weatherTwo").addClass("fas fa-cloud-rain");
        } 

        // Temperature and Humidity Day 3
        var kB = response.list[2].main.temp;
        var fB = Math.round((kB-273.15)*1.8+32);
        console.log(fB);
        $('.dayThreeTemp').text(fB);

        $('.dayThreeHum').text(response.list[2].main.humidity);

        var weatherThree = response.list[2].weather[0].main;
        if(weatherThree === "Clear"){
            $("#weatherThree").addClass("fas fa-sun"); 
        } if(weatherThree === "Clouds") {
            $("#weatherThree").addClass("fas fa-cloud");
        } if (weatherThree === "Rain"){
            $("#weatherThree").addClass("fas fa-cloud-rain");
        } if (weatherThree === "Snow"){
            $("#weatherThree").addClass("fas fa-snowflake");
        } if (weatherThree === "Thunderstorm"){
            $("#weatherThree").addClass("fas fa-cloud-showers-heavy");
        } if (weatherThree === "Drizzle"){
            $("#weatherThree").addClass("fas fa-cloud-rain");
        } 

        // Temperature and Humidity Day 4
        var kC = response.list[3].main.temp;
        var fC = Math.round((kC-273.15)*1.8+32);
        console.log(fC);
        $('.dayFourTemp').text(fC);

        $('.dayFourHum').text(response.list[3].main.humidity);

        var weatherFour = response.list[3].weather[0].main;
        if(weatherFour === "Clear"){
            $("#weatherFour").addClass("fas fa-sun"); 
        } if(weatherFour === "Clouds") {
            $("#weatherFour").addClass("fas fa-cloud");
        } if (weatherFour === "Rain"){
            $("#weatherFour").addClass("fas fa-cloud-rain");
        } if (weatherFour === "Snow"){
            $("#weatherFour").addClass("fas fa-snowflake");
        } if (weatherFour === "Thunderstorm"){
            $("#weatherFour").addClass("fas fa-cloud-showers-heavy");
        } if (weatherFour === "Drizzle"){
            $("#weatherFour").addClass("fas fa-cloud-rain");
        } 

        //Temperature and Humidity Day 5
        var kD = response.list[4].main.temp;
        var fD = Math.round((kD-273.15)*1.8+32);
        console.log(fD);
        $('.dayFiveTemp').text(fD);

        $('.dayFiveHum').text(response.list[4].main.humidity);

        var weatherFive = response.list[4].weather[0].main;
        if(weatherFive === "Clear"){
            $("#weatherFive").addClass("fas fa-sun"); 
        } if(weatherFive === "Clouds") {
            $("#weatherFive").addClass("fas fa-cloud");
        } if (weatherFive === "Rain"){
            $("#weatherFive").addClass("fas fa-cloud-rain");
        } if (weatherFive === "Snow"){
            $("#weatherFive").addClass("fas fa-snowflake");
        } if (weatherFive === "Thunderstorm"){
            $("#weatherFive").addClass("fas fa-cloud-showers-heavy");
        } if (weatherFive === "Drizzle"){
            $("#weatherFive").addClass("fas fa-cloud-rain");
        } 

        })

    };
    

    /* set the weather info to the object returned (see raw data) */

    /* init */
    /* check local storage for history of cities and render */
    function localStore() {
        var cityStorage = $('#citySearch').val();
        localStorage.setItem("pastSearches",cityStorage);
        if(pastSearches.indexOf(cityStorage) == -1) {
            pastSearches.unshift(cityStorage);
            if(pastSearches.length > 5) { 
               pastSearches.pop();
            }
            localStorage["pastSearches"] = JSON.stringify(pastSearches);
        };
        renderLastRegistered();
    };

    renderLastRegistered();

    function renderLastRegistered() {
        if(localStorage["pastSearches"]) {
            pastSearches = JSON.parse(localStorage["pastSearches"]);
        $("#searchBtnOne").val(pastSearches[0]);
        $("#searchBtnTwo").val(pastSearches[1]);
        $("#searchBtnThree").val(pastSearches[2]);
        $("#searchBtnFour").val(pastSearches[3]);
        $("#searchBtnFive").val(pastSearches[4]);
    
        };
    };

});


