$(document).ready(function(event){
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

            // UV Index
            // $(".uvIndex").text(response.list[0].wind.speed);

            fiveDayForecast()
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

        // Temperature and Humidity Day 2
        var kA = response.list[1].main.temp;
        var fA = Math.round((kA-273.15)*1.8+32);
        console.log(fA);
        $('.dayTwoTemp').text(fA);

        $('.dayTwoHum').text(response.list[1].main.humidity);

        // Temperature and Humidity Day 3
        var kB = response.list[2].main.temp;
        var fB = Math.round((kB-273.15)*1.8+32);
        console.log(fB);
        $('.dayThreeTemp').text(fB);

        $('.dayThreeHum').text(response.list[2].main.humidity);

        // Temperature and Humidity Day 4
        var kC = response.list[3].main.temp;
        var fC = Math.round((kC-273.15)*1.8+32);
        console.log(fC);
        $('.dayFourTemp').text(fC);

        $('.dayFourHum').text(response.list[3].main.humidity);

        //Temperature and Humidity Day 5
        var kD = response.list[4].main.temp;
        var fD = Math.round((kD-273.15)*1.8+32);
        console.log(fD);
        $('.dayFiveTemp').text(fD);

        $('.dayFiveHum').text(response.list[4].main.humidity);

        })

    };
    

    /* set the weather info to the object returned (see raw data) */

    /* init */
    /* check local storage for history of cities and render */
    

});
