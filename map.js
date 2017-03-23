
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( "https://opendata.camden.gov.uk/resource/2nze-7e6c.json");

// Set another completion function for the request above
jqxhr.done(function(data) {
        
    var mymap = L.map('mapid').setView([51.52, -0.10], 13);
    L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.jpg70?access_token={accessToken}', {
        accessToken: 'pk.eyJ1Ijoib2traW5kcmVkIiwiYSI6Ild2MnY5dDQifQ.EHr6blIYPYeg4bWmSStT-g',
        maxZoom: 18,
        id: 'opencamden'
    }).addTo(mymap);


    for(i=0; i<data.length; i++) {
        var row = data[i];

        if (row.longitude != null) {

            var radius = row.total_bidders / 10.0;

            var circle = L.circle([row.latitude, row.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: radius
            }).addTo(mymap);
        }
    }


});
