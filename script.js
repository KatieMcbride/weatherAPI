$(document).ready(function(event){
    /* db */
    /* raw weather object from api */
    // /* variables */

    
    

    /* parsed weather object */

    /* utility functions */
    /* parse raw data */
    /* render parsed data */

    /* event functions */
    
    /* search button click */
    $('#citySearchBtn').on('click', function(){
        var city = $('#citySearch').val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=1fbaf845db1ffb968efccccfdbaa9c39";
        $.ajax({
            url: queryURL,
            method: 'GET'
             /* get raw data */
        }).then(function(response){
            console.log(response);
            /*parse data*/

            $(".city").text("City:" + response.city.name);
        })
    })
    /* have city name  */

    /* send city name to a openweather api */
    /* set the weather info to the object returned (see raw data) */

    /* init */
    /* check local storage for history of cities and render */
    

});
